import React from 'react'
import { View, Text } from 'react-native'
import DetailedPost from '../components/DetailedPost'
import places from '../../assets/data/feed'
import {useRoute} from '@react-navigation/native'




const DetailedPostScreen = (props) => {

  const route = useRoute()

  const post = places.find(place => place.id === route.params.postId)
  return (
    <View style={{backgroundColor: 'white', marginTop: 20}}>
      <DetailedPost post={post} />
    </View>
  )
}

export default DetailedPostScreen
