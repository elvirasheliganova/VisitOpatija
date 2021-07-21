import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import DestinationSearchScreen from '../screens/DestinationSearchScreen';
import GuestScreen from '../screens/GuestScreen';

import HomeTabNavigator from './HomeTabNavigator';
import SearchResultScreen from '../screens/SearchResultScreen';

const Stack = createStackNavigator()

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name={'Home'} component={HomeTabNavigator} options={{headerShown: false}} />
        <Stack.Screen name={'Guests'} component={GuestScreen} options={{title: 'How big is your company?'}} />
        <Stack.Screen name={'Destinations Search'} component={DestinationSearchScreen}/>
        <Stack.Screen name={'Search Results'} component={SearchResultScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
