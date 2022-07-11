import { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';

import Config from 'react-native-config';

import { AppText } from '~/view/components/atoms';
import { useCreatePost } from '~/view/hooks/mutations/useCreatePost';
import { GS } from '~/view/theme/GlobalStyles';

const { API_BASE } = Config;

export const AuthScreen = () => {
  const navigation = useNavigation();
  const { mutate } = useCreatePost();
  const goToHome = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View style={[GS.fill, GS.center]}>
      <AppText type="h1">Auth Screen {API_BASE}</AppText>
      <TouchableOpacity onPress={goToHome} style={{}}>
        <AppText type="a">Go to home</AppText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          mutate({ userId: 1, body: 'test', title: 'test' });
        }}>
        <AppText type="a">Create Post</AppText>
      </TouchableOpacity>
    </View>
  );
};
