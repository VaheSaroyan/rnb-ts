import { useNavigation } from '@react-navigation/native';
import { useMutation } from 'react-query';

import { Posts } from '~/services/api/Posts';

export const useCreatePost = () => {
  const navigation = useNavigation();
  const { mutate, status } = useMutation(Posts.create, {
    onSuccess: () => {
      navigation.navigate('Home');
    },
  });

  return { mutate, status };
};
