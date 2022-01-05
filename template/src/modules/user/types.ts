import { UserProfileModel } from '~/models/user';
import { AsyncStatus } from '~/types';

export interface UserState {
  profileStatus: AsyncStatus;
  profile: Nullable<UserProfileModel>;
  auth: Nullable<UserAuth>;
}

export interface UserAuth {
  access: string;
  refresh: string;
}
