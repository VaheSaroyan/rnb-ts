import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export declare type StyleType = TextStyle & ViewStyle & ImageStyle;

export type ThemeColors = { [key: string]: string };

export type ThemeNavigationColors = {
  primary: string;
  background: string;
  card: string;
  text: string;
  border: string;
  notification: string;
};

export type ThemeFontSize = { [key: string]: number };
export type ThemeMetricsSizes = {
  tiny: number;
  small: number;
  regular: number;
  large: number;
};
