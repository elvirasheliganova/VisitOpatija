import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = () => {

  const navigation = useNavigation()

  return (
    <View>

      {/* SearchBar*/}
      <TouchableOpacity style={styles.searchButton} onPress={() => navigation.navigate('Destinations Search')} >
         
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
    height: 765,
    justifyContent: 'flex-start',
   resizeMode: 'cover',
},
title: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#fff',
    width: '70%',
    marginLeft: 20,
    marginTop: 50,
    lineHeight: 85
}, 

button: {
  width: 170,
  backgroundColor: '#f1f2f2',
  borderRadius: 10,
  height: 35,
  marginLeft: 20,
  marginTop: 20,
  justifyContent: 'center',
  alignItems: 'center',
},
text:{
  fontSize: 14,
  fontWeight: '500',
  color: '#015151'
},
searchButton: {
  backgroundColor:  'rgba(81, 153, 155, 1)',
 
  borderColor: '#b3eae4cc',
  borderRadius: 10,
  borderWidth: 1,
  width: Dimensions.get('window').width - 40 ,
  height: 60,
  position: 'absolute',
  bottom: 55,
  
  
  zIndex: 100,
  alignSelf: 'center',
  justifyContent: 'space-around',
  alignItems: 'center',
  paddingHorizontal: 75,
  flexDirection: 'row',



  
},
searchButtonText: {
  
  fontWeight: '600',
  color: '#fff',
  fontSize: 20,
}
})

export default HomeScreen

