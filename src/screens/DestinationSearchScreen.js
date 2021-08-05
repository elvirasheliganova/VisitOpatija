import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, ImageBackground } from 'react-native'


import { useNavigation } from '@react-navigation/native'
import Picker from '../components/Picker'
import CategoryStaysItem from '../components/CategoryStaysItem'
import TopStaysCard from '../components/TopStaysCard'


const DestinationSearchScreen = () => {

  const [chooseLocation, setChooseLocation] = useState('Choose location...')
  const navigation = useNavigation()

  return (
    <View style={styles.root}>
     
      
         
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
        
          <TouchableOpacity style={styles.searchBox} onPress={() => navigation.navigate('Guests')} >
            <Picker chooseLocation={chooseLocation} setChooseLocation={setChooseLocation}
             />
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.goBtn}
          onPress={() => navigation.navigate('Guests', {chooseLocation})}
          >
            <View style={styles.go}>
              <Text style={styles.goText}>
                Go!
              </Text>

            </View>
          </TouchableOpacity>
        
        <View>
          <Text style={styles.staysTitle}>Top stays</Text>
          <View style={styles.staysBox}>
            <TopStaysCard
            image={ {uri: 'https://source.unsplash.com/VvTVkc_p-eg/640x958'}}
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
    flex: 1,
    paddingLeft: 20,
    height: '100%',
    paddingTop: 50, 
    backgroundColor: '#fff'
    

  },

  categoryBox: {
    flexDirection: 'row',
    
    marginTop: 50
  },
  searchBox: {
    marginTop: 50,
    marginBottom: 25
  
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
  
  searchTitle: {
    color: '#015151',
   
    fontSize: 30,
    fontWeight: 'bold',
   
  },

  goBtn: {
    backgroundColor: 'rgba(247, 11, 128, 0.7)',
    width: 100,
    borderRadius: 10,
    marginRight: 25,
    marginBottom: 10,
    alignSelf: 'flex-end',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  goText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  staysBox: {
    flexDirection: 'row',
  
  },
  staysTitle: {
    color: '#015151',
    fontSize: 20,
    fontWeight: 'bold',
  }

})


export default DestinationSearchScreen
