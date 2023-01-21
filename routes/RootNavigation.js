import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import TabBarNavigation from './TabBarNavigation';
import { StatusBar } from 'expo-status-bar';

const RootNavigation = () => {
  return (
    <NavigationContainer> 
      <StatusBar style='light'/>
        <TabBarNavigation/>
    </NavigationContainer>

  )
}

export default RootNavigation
