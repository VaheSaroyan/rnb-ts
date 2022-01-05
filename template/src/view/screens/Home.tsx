import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const goToAuth = React.useCallback(() => {
    navigation.navigate('Auth');
  }, [navigation]);

  return (
    <View>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={goToAuth}>
        <Text>Go to auth</Text>
      </TouchableOpacity>
    </View>
  );
};
