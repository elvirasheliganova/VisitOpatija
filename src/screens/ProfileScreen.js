import React from 'react'
import { View, Text,  TouchableOpacity } from 'react-native'
import {Auth} from 'aws-amplify'

const ProfileScreen = () => {

  const logout = () => {
    Auth.signOut();
  }

  return (
    <View style={{display: 'flex', height: '100%', justifyContent:'center', alignItems: 'center'}}>
      <TouchableOpacity 
        onPress={logout}
        style={{
          width: '100%', 
          height: 40,
          backgroundColor: '#c3c3c3',
          justifyContent:'center', 
          alignItems: 'center'
          }}>
        <Text>Log Out</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default ProfileScreen
