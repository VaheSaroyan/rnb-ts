import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';

import { entries } from '~/utils/objects/entries';
import { useTheme } from '~/view/theme';

entries({ a: 1, b: 2 }).forEach(item => item);
export const AuthScreen: React.FC = () => {
  const navigation = useNavigation();
  const { Gutters } = useTheme();
  const goToHome = React.useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View>
      <Text style={Gutters.largeHMargin}>Auth Screen</Text>
      <TouchableOpacity onPress={goToHome} style={Gutters.largeHMargin}>
        <Text>Go to home</Text>
      </TouchableOpacity>
    </View>
  );
};
