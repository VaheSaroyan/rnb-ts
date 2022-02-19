import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '~/view/screens/Home';

const screenOptions = {
  gestureEnabled: false,
  headerShown: false,
};

const HomeStack = createStackNavigator();

export const HomeNavigator: React.FC = () => (
  <HomeStack.Navigator screenOptions={screenOptions}>
    <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
  </HomeStack.Navigator>
);
