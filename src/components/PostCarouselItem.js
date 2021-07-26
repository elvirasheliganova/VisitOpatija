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
    padding: 10,
    marginVertical: 10,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 10,
},
shadowOpacity: 0.36,
shadowRadius: 6.68,

elevation: 11,

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
    fontSize: 12,
    color: '#5b5b5b',
    marginVertical: 5,
  },
 
  description: {
    fontSize: 14,
    lineHeight: 20,
    marginVertical: 5,
  },
  prices: {
    fontSize: 12,
    marginVertical: 5,
  },

  price: {
    fontWeight: 'bold'
  },
  

  

  
})

export default PostCarouselItem
