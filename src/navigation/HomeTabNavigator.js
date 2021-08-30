import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'

import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from  'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import ExploreStackNavigator from './ExploreStackNavigator'
import SearchResultMapScreen from '../screens/SearchResultMapScreen'
import DetailedPostScreen from '../screens/DetailedPostScreen'
import ProfileScreen from '../screens/ProfileScreen'

const Tab = createBottomTabNavigator()

const HomeTabNavigator = (props) => {
  return (
   <Tab.Navigator tabBarOptions={{
     activeTintColor: '#f70b80'
   }}>
        <Tab.Screen 
        name={'Explore'} 
        component={ExploreStackNavigator}
       
        options={{
          tabBarIcon: ({color}) => (
            <Fontisto name="search" size={25} color={color} />
          )

        }}
        />

        <Tab.Screen 
            name={'Saved'} 
            component={HomeScreen}
            options={{
              tabBarIcon: ({color}) => (
                <FontAwesome name="heart-o" size={25} color={color} />
              )

            }}
            />

        <Tab.Screen 
            name={'Messages'} 
            component={HomeScreen}
            options={{
              tabBarIcon: ({color}) => (
                <FontAwesome5 name="comment" size={25} color={color} />
              )

            }}
            />

        <Tab.Screen 
            name={'Profile'} 
            component={ProfileScreen}
            options={{
              tabBarIcon: ({color}) => (
                <EvilIcons name="user" size={35} color={color} />
              )

            }}
            />

       
   </Tab.Navigator>
  )
}

export default HomeTabNavigator
