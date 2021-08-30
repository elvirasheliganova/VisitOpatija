import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const days = 7

const Post = (props) => {

  const post = props.post

  const navigation = useNavigation()

  


  return (
    <TouchableOpacity 
    onPress={() => navigation.navigate('DetailedPost', {postId: post.id})}
    style={styles.container}>
      <Image 
        style={styles.image}
        source={{ uri: post.image}}
      />
      <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>
      
      <Text style={styles.description} numberOfLines={2}>{post.type}. {post.title}</Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.price}>  ${post.price} / night</Text>
      </Text>

      <Text style={styles.totalPrice}>${post.price * days} total</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  image: {
    width: '100%',
    aspectRatio: 3/2,
    resizeMode: 'cover',
    borderRadius: 10
  }, 
  bedrooms: {
    fontSize: 14,
    color: '#5b5b5b',
    marginVertical: 10,
  },
 
  description: {
    fontSize: 16,
    lineHeight: 20,
    marginVertical: 10,
  },
  prices: {
    fontSize: 16,
    marginVertical: 10,
  },
  oldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through'
  },
  price: {
    fontWeight: 'bold'
  },
  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline'
  }

  

  
})
export default Post

