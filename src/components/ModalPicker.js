import React from 'react'
import  {
   StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView
} from 'react-native'

const OPTIONS = ['Opatija', 'Icici', 'Volosko', 'Ika', 'Lovran']
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const ModalPicker = (props) => {

  const onPressItem = (option) => {
    props.changeModalVisibility(false)
    props.setLocation(option)
   

  }

  const option = OPTIONS.map((item, index) => {
    return (
      <TouchableOpacity 
        style={styles.option}
        key={index}
        onPress={() => onPressItem(item)}
      >
        <Text 
        style={styles.text}>
          {item}
        </Text>

      </TouchableOpacity>
    )
  })
  return (
    <TouchableOpacity 
      onPress={() => props.changeModalVisibility(false)} 
      style={styles.container}
    >
      <View style={[styles.modal, {width: WIDTH - 35}, {height: HEIGHT/3.5}]}>
        <ScrollView>
          {option}
        </ScrollView>
      </View>
      
    </TouchableOpacity>
  )

}

styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 305,
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  modal: {
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    
  },
  option: {
    alignItems: 'flex-start'
  }, 
  text: {
    margin: 15,
    fontSize: 14,
    fontWeight: 'bold'
  }
})

export { ModalPicker }