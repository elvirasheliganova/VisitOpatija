import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SearchResultMapScreen from '../screens/SearchResultMapScreen'
import SearchResultScreen from '../screens/SearchResultScreen'
import { useRoute } from '@react-navigation/native'

const Tab = createMaterialTopTabNavigator()

const SearchResultTopNavigator = (props) => {

  const route = useRoute();
  console.log(route)

  
  const { guests, location } = route.params;

  return (
    <Tab.Navigator 
    tabBarOptions={{
      activeTintColor: '#f70b80',
      indicatorStyle: {
        backgroundColor:'#f70b80'
      }
    }}>
      <Tab.Screen 
        name={'List'}>
          {() => (
          <SearchResultScreen guests={guests} location={location} />
          )}

        </Tab.Screen>

      <Tab.Screen 
        name={'Map'}>
          {() => (
          <SearchResultMapScreen guests={guests} location={location} />
          )}


        </Tab.Screen>
        
    </Tab.Navigator>
  )
}

export default SearchResultTopNavigator
