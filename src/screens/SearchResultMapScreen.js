import React, { useState} from 'react'
import MapView, {Marker, PROVIDER_GOOGLE }from 'react-native-maps';
import { View, Text } from 'react-native'
import CustomMarker from '../components/CustomMarker';
import places from '../../assets/data/feed'
import PostCarouselItem from '../components/PostCarouselItem';

const SearchResultMapScreen = (props) => {

  const [selectedPlaceId, setSelectedPlaceId] = useState()

  return (
    <View style={{width:'100%', height: '100%'}}>
       <MapView 
       style={{width:'100%', height: '100%'}}
       
        initialRegion={{
          latitude: 45.341038,
          longitude: 14.309721,
          latitudeDelta: 0.0952,
          longitudeDelta: 0.0421,
        }}
  >
        {places.map(place => (
          <CustomMarker
          coordinate={place.coordinate}
          price={place.price}
          isSelected={place.id === selectedPlaceId}
          onPress={() => setSelectedPlaceId(place.id)}
          />)
          ) }
        
      </MapView>

      <View style={{position: 'absolute', bottom: 50}}>
        <PostCarouselItem post={places[0]}/>
      </View>


    </View>
  )
}

export default SearchResultMapScreen
