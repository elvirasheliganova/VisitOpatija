import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, ImageBackground } from 'react-native'


import { useNavigation } from '@react-navigation/native'
import Picker from '../components/Picker'
import CategoryStaysItem from '../components/CategoryStaysItem'
import TopStaysCard from '../components/TopStaysCard'


const DestinationSearchScreen = () => {

  
  
 

  return (
    <View style={styles.root}>
     
      <View style={styles.search}>
         
         <Text style={styles.searchTitle}>Where do {'\n'}you want to stay?</Text> 
         
         <View style={styles.categoryBox}>
            <CategoryStaysItem 
            type='villa'
            icon='house'
            />
            
            <CategoryStaysItem 
            type='apartment'
            image={require('../../assets/images/opatijaWelcome.jpg')}
            icon='apartment'
            />
            <CategoryStaysItem 
            type='hotel'
            image={require('../../assets/images/opatijaWelcome.jpg')}
            icon='hotel'
            />
          </View>
        
          <View style={styles.searchBox}>
            <Picker />
          </View>
        </View>
        <View>
          <Text style={styles.staysTitle}>Top stays</Text>
          <View style={styles.staysBox}>
            <TopStaysCard
            image={require('../../assets/images/opatijaWelcome.jpg')}
            description='Angiolina'
            type='Villa' 
            icon='heart-outline'/>
            <TopStaysCard
            image={require('../../assets/images/opatijaWelcome.jpg')}
            description='Mary Garden'
            type='Apartment' 
            icon='heart-outline'/>
          </View>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  root: {
    marginLeft: 20,
    height: '100%',
    marginTop: 50
    

  },

  categoryBox: {
    flexDirection: 'row',
    
    marginTop: 50
  },
  searchBox: {
    marginVertical: 50,
    
    
  
  
    

  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  iconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e8e8e8',
    borderRadius: 10,
    marginRight: 10,
  },
  locationText: {

  }, 
 
  searchTitle: {
    color: '#102a27',
   
    fontSize: 30,
    fontWeight: 'bold',
   
  },
  staysBox: {
    flexDirection: 'row',
    marginTop: 20
  },
  staysTitle: {
    color: '#102a27',
    fontSize: 20,
    fontWeight: 'bold',
  }

})


export default DestinationSearchScreen
