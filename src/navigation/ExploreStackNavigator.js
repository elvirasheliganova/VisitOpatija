import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import SearchResultScreen from '../screens/SearchResultScreen'
import SearchResultTopNavigator from './SearchResultTopNavigator'

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
      component={SearchResultTopNavigator} />

    </Stack.Navigator>
    
  )
}

export default ExploreStackNavigator
