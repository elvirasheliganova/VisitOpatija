import React, { useEffect, useState} from 'react'
import { View, FlatList, StyleSheet} from 'react-native'

import Post from '../components/Post'
import { API,  graphqlOperation } from 'aws-amplify'
import { listPosts } from '../graphql/queries'



const SearchResultScreen = (props) => {

  const { guests } = props

  const [posts, setPosts] = useState([])
  

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

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => 
        <View style={styles.root}>
           <Post post={item}/>
        </View>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    margin: 15,
    backgroundColor: '#eaf1f1',
    borderRadius: 15,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 0,
    },
    shadowOpacity: 0.20,
    shadowRadius: 4.65,
    
    elevation: 8,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default SearchResultScreen
