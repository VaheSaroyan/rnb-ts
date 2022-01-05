import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthNavigator } from './Auth';
import { HomeNavigator } from './Home';

const AppStack = createStackNavigator();

export const AppNavigator: React.FC = () => (
  <NavigationContainer>
    <AppStack.Navigator>
      <AppStack.Screen name="Auth" component={AuthNavigator} />
      <AppStack.Screen name="Home" component={HomeNavigator} />
    </AppStack.Navigator>
  </NavigationContainer>
);
