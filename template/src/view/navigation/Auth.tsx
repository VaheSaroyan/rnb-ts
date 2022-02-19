import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { AuthScreen } from '~/view/screens/Auth';

const screenOptions = {
  gestureEnabled: false,
  headerShown: false,
};

const AuthStack = createStackNavigator();

export const AuthNavigator: React.FC = () => (
  <AuthStack.Navigator screenOptions={screenOptions}>
    <AuthStack.Screen name="AuthScreen" component={AuthScreen} />
  </AuthStack.Navigator>
);
