import { FC } from 'react';

import { Text, TextProps } from 'react-native';

import s from './styles';

export interface AppTextProps extends TextProps {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'a';
  center?: boolean;
}
export const AppText: FC<AppTextProps> = ({ type = 'p', center, ...props }) => (
  <Text {...props} style={[s[type], center && s.textCenter]} />
);
