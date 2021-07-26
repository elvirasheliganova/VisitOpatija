import React from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions  } from 'react-native'

const PostCarouselItem = (props) => {
  const post = props.post
  const width = useWindowDimensions().width
  return (
    <View style={[styles.container, {width: width - 60}]}>
      <View style={styles.innerContainer}>
            <Image 
              style={styles.image}
              source={{ uri: post.image}}
            />
            <View style={{flex: 1, marginHorizontal: 10}}>  
              <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>
              
              <Text style={styles.description} numberOfLines={2}>{post.type}. {post.title}</Text>
              <Text style={styles.prices}>
                
                <Text style={styles.price}>  ${post.price} / night</Text>
              </Text>

             
            </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    padding: 5

  },
  image: {
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
    
  }, 
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden'
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

export default PostCarouselItem
