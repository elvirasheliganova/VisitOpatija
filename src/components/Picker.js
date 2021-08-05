

import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import { ModalPicker } from './ModalPicker'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const Picker = ({chooseLocation, setChooseLocation}) => {

  
  const [isModalVisible, setModalVisible] = useState(false)

  const changeModalVisibility = (bool) => {
    setModalVisible(bool)
  }
  const setLocation = (option) => {
    setChooseLocation(option)
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity 
        onPress={() => changeModalVisibility(true)  }
        
        style={styles.toucahableOpacity}>
        <Text style={styles.text}>{chooseLocation}</Text>

      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType='fade'
        visible={isModalVisible}
        onRequestClose={() => changeModalVisibility(false)}
      >
        <ModalPicker 
          changeModalVisibility = {changeModalVisibility}
          setLocation={setLocation}
          
        />
      </Modal>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    
    
    
    
    
    alignItems: 'center',
    justifyContent: 'center',
    width: WIDTH - 22
    
  },
  text: {
    marginVertical: 10,
    fontSize: 14,
  }, 
  toucahableOpacity: {
    backgroundColor: '#eaf1f1',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    marginRight: 15,
    borderRadius: 5,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 0,
    },
    shadowOpacity: 0.20,
    shadowRadius: 4.65,
    
    elevation: 8,
    
  }
})

export  default Picker ;