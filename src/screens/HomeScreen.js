import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = () => {

  

  return (
    <View>

      {/* SearchBar*/}
      <TouchableOpacity style={styles.searchButton} >
         
          <Text style={styles.searchButtonText}>Start your journey</Text>
          <Fontisto name='arrow-right' size={15} color='#fff' />
        </TouchableOpacity>

      <ImageBackground source={require('../../assets/images/opatijaWelcome.jpg')} style={styles.image} >
      {/* Title*/}
        <Text style={styles.title}>Enjoy Opatija </Text>

      {/* Button*/}

        <TouchableOpacity style={styles.button} onPress={() => console.warn('Pressed')}>
          <Text style={styles.text}>Explore nearby stays</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    
    width: '100%',
    height: 800,
    justifyContent: 'flex-start',
   resizeMode: 'cover',
},
title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#fff',
    width: '70%',
    marginLeft: 20,
    marginTop: 70,
    lineHeight: 85
}, 

button: {
  width: 200,
  backgroundColor: '#fff',
  borderRadius: 10,
  height: 40,
  marginLeft: 20,
  marginTop: 20,
  justifyContent: 'center',
  alignItems: 'center',
},
text:{
  fontSize: 16,
  fontWeight: '500',
},
searchButton: {
  backgroundColor:  'rgba(81, 153, 155, 1)',
  borderRadius: 15,
  borderColor: '#b3eae4cc',
  borderWidth: 1,
  width: Dimensions.get('window').width - 140,
  height: 50,
  position: 'absolute',
  bottom: 100,
  
  zIndex: 100,
  alignSelf: 'center',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 25,
  flexDirection: 'row',



  
},
searchButtonText: {
  
  fontWeight: '600',
  color: '#fff',
  fontSize: 20,
}
})

export default HomeScreen

