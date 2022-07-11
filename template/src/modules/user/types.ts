import { UserProfileModel } from '~/models/user';

export interface UserAuth {
  access: string;
  refresh: string;
}

export interface UserState {
  profile: Nullable<UserProfileModel>;
  auth: Nullable<UserAuth>;
}
