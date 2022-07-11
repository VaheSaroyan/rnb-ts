import { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
import { FlatList, ListRenderItem, TouchableOpacity, View } from 'react-native';

import { PostModel } from '~/models/post';
import { AppText } from '~/view/components/atoms';
import { usePosts } from '~/view/hooks/query/usePosts';
import { GS } from '~/view/theme/GlobalStyles';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const { posts } = usePosts();

  const goToAuth = useCallback(() => {
    navigation.navigate('Auth');
  }, [navigation]);

  const _renderItem = useCallback<ListRenderItem<PostModel>>(
    ({ item }) => (
      <View>
        <AppText type="h3" center>
          {item.title}
        </AppText>
        <AppText center>{item.body}</AppText>
      </View>
    ),
    [],
  );

  return (
    <View style={GS.center}>
      <AppText type="h1">Home Screen</AppText>
      <TouchableOpacity onPress={goToAuth}>
        <AppText type="a">Go to auth</AppText>
      </TouchableOpacity>
      <FlatList data={posts} renderItem={_renderItem} />
    </View>
  );
};
