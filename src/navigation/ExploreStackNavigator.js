import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import SearchResultScreen from '../screens/SearchResultScreen'

const Stack = createStackNavigator()

const ExploreStackNavigator = () => {
  return (

    <Stack.Navigator>

      <Stack.Screen 
      name={'Welcome'}
      component={HomeScreen}
      options={{
        headerShown: false

      }} />
    

      
      <Stack.Screen 
      name={'Search Results'}
      component={SearchResultScreen} />

    </Stack.Navigator>
    
  )
}

export default ExploreStackNavigator
