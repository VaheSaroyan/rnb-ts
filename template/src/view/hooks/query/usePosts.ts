import { useQuery } from 'react-query';

import { Posts } from '~/services/api/Posts';

export const usePosts = () => {
  const { data, status } = useQuery('posts', Posts.get, {});
  return { posts: data, status };
};
