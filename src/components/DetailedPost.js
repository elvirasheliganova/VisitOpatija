import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'

const DetailedPost = (props) => {
  const post = props.post
  return (
    <ScrollView>
      <View style={styles.container}>
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

        <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
        <Text style={styles.longDescription}>
          {post.description}
        </Text>
      </View>
    </ScrollView>
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
  },
  longDescription: {
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 10,
  },

  

  
})
export default DetailedPost

