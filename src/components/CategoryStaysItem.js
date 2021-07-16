
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons'

export default function CategoryStaysItem(props) {
  return (
    <View  style={styles.root}>
      
      <Text style={styles.type}>{props.type}</Text>
      <View style={styles.image}>
      <MaterialIcons  name={props.icon} size={40} color={'#44cfc0'}/>
      </View>
      
      
      

    
      
    </View>
  )
}
const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginRight: 25,
    borderRadius: 15,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 0,
    },
    shadowOpacity: 0.10,
    shadowRadius: 4.65,
    
    elevation: 8,
    
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: '#eaf1f1',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 0,
    },
    shadowOpacity: 0.20,
    shadowRadius: 4.65,
    
    elevation: 8,
    
    
  },
  type: {
   
    paddingRight: 20,
    fontWeight: 'bold'
  }

})





