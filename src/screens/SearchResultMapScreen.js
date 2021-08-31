import React, { useState, useEffect, useRef} from 'react'
import MapView, {Marker, PROVIDER_GOOGLE }from 'react-native-maps';
import { View, Text } from 'react-native'
import CustomMarker from '../components/CustomMarker';

import PostCarouselItem from '../components/PostCarouselItem';
import { FlatList } from 'react-native-gesture-handler';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import { API,  graphqlOperation } from 'aws-amplify'
import { listPosts } from '../graphql/queries'

const SearchResultMapScreen = (props) => {

  const { guests } = props
  const [selectedPlaceId, setSelectedPlaceId] = useState(null)
  const [posts, setPosts] = useState([])

  const width = useWindowDimensions().width

  const map = useRef()

  const flatlist = useRef()

  const viewConfig = useRef({itemVisiblePercentThreshold: 70})

  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item
      setSelectedPlaceId(selectedPlace.id)
    }
  })

  useEffect( () => {
    const fetchPosts = async () => {
      try {

        const postResult = await API.graphql(
          graphqlOperation(listPosts, {
            filter:{
              maxGuests: {
                ge: guests
              }
            }
          })
        )
        setPosts(postResult.data.listPosts.items)

      } catch (e) {
        console.log(e);
      }

    }

    fetchPosts()
  }, [])

  useEffect(() => {
    if (!selectedPlaceId || !flatlist) {
      return
    }
    const index = posts.findIndex(place => place.id === selectedPlaceId)
   flatlist.current.scrollToIndex({index})

   const selectedPlace = posts[index]
   const region = {
    latitude: selectedPlace.latitude,
    longitude: selectedPlace.longitude,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1
  }
  map.current.animateToRegion(region)
   
  }, [selectedPlaceId])

  return (
    <View style={{width:'100%', height: '100%'}}>
       <MapView
        ref={map} 
        style={{width:'100%', height: '100%'}}
       
        initialRegion={{
          latitude: 45.341038,
          longitude: 14.309721,
          latitudeDelta: 0.0952,
          longitudeDelta: 0.0421,
        }}
  >
        {posts.map(place => (
          <CustomMarker
          coordinate={{latitude: place.latitude, longitude: place.longitude}}
          price={place.price}
          isSelected={place.id === selectedPlaceId}
          onPress={() => setSelectedPlaceId(place.id)}
          />)
          ) }
        
      </MapView>

      <View style={{ position: 'absolute', bottom: 10}}>
        <FlatList
        ref={flatlist}
        data={posts}
        renderItem={({item}) => (
          <PostCarouselItem post={item}/>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width - 60}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={viewConfig.current}
        onViewableItemsChanged={onViewChanged.current}
        />
        
      </View>


    </View>
  )
}

export default SearchResultMapScreen
