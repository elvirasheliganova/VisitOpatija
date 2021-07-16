

import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import { ModalPicker } from './ModalPicker'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const Picker = () => {

  const [chooseLocation, setChooseLocation] = useState('Choose location...')
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
        onPress={() => changeModalVisibility(true)}
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
    backgroundColor: 'grey',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    marginRight: 15,
    borderRadius: 5
    
  }
})

export  default Picker ;