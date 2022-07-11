import { Api } from './Api';

import { PostModel } from '~/models/post';

export class Posts {
  static async create(params: {
    title: string;
    body: string;
    userId: number;
  }): Promise<PostModel[]> {
    const { data } = await Api.post('/posts', params);
    return data;
  }
  static async get(params: any): Promise<PostModel[]> {
    const { data } = await Api.get('/posts', params);
    return data;
  }
}
