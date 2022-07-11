import { UserProfileModel } from '~/models/user';

import { Api } from './Api';

export class User {
  static async signIn(
    params: FormData | Record<string, any>,
  ): Promise<{ user: UserProfileModel; accessToken: string; refreshToken: string }> {
    const { data } = await Api.post('/sign-in/', params);
    return {
      user: User.createFromApi(data.user),
      accessToken: data.access,
      refreshToken: data.refresh,
    };
  }

  static createFromApi(data: any): UserProfileModel {
    return {
      id: data.id,
      email: data.email,
    };
  }
}
