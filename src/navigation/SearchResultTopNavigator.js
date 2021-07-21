import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SearchResultMapScreen from '../screens/SearchResultMapScreen'
import SearchResultScreen from '../screens/SearchResultScreen'

const Tab = createMaterialTopTabNavigator()

const SearchResultTopNavigator = () => {
  return (
    <Tab.Navigator 
    tabBarOptions={{
      activeTintColor: '#f70b80',
      indicatorStyle: {
        backgroundColor:'#f70b80'
      }
    }}>
      <Tab.Screen 
        name={'List'}
        component={SearchResultScreen}/>

      <Tab.Screen 
        name={'Map'}
        component={SearchResultMapScreen}/>
    </Tab.Navigator>
  )
}

export default SearchResultTopNavigator
