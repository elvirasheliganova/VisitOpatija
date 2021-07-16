
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import  Ionicons  from 'react-native-vector-icons/Ionicons'

export default function TopStaysCard(props) {
  return (
    <View  style={styles.root}>
      <View style={styles.image}>
       <Image source={props.image} style={{width: 150, height: 150}} />
      </View>

      <View style={styles.title}>
        <View>
          <Text style={styles.description}>{props.description}</Text>
          <Text style={styles.type}>{props.type}</Text>
        </View>
      
        <View style={styles.icon}>
          <Ionicons  name={props.icon} size={20} color={'#44cfc0'} />
        </View>
      </View>
     </View>
  )
}
const styles = StyleSheet.create({
  root: {
    width: 160,
    marginTop: 30,
    marginRight: 30,
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
  image: {
    width: 150,
    height: 150,
    overflow: 'hidden',
    
    
    
  },
  type: {
   
    paddingRight: 20,
    fontWeight: 'bold'
  },
  title: {
    padding: 10,
    
    width: 150,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: {
    width: 30,
    height: 30,
    backgroundColor: '#eaf1f1',
    borderRadius: 15,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 0,
    },
    shadowOpacity: 0.20,
    shadowRadius: 4.65,
    
    elevation: 8,
    justifyContent: 'center',
    alignItems: 'center'
  }

})





