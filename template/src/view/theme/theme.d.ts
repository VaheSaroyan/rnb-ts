import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export type StyleType = TextStyle & ViewStyle & ImageStyle;

export type ThemeColors = { [key: string]: string };
export type ThemeNavigationTheme = {
  dark: boolean;
  colors: ThemeNavigationColors;
};
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

export type ThemeVariables = {
  Colors: ThemeColors;
  NavigationColors: ThemeNavigationColors;
  FontSize: ThemeFontSize;
  MetricsSizes: ThemeMetricsSizes;
};

export type ThemeFonts = { [key: string]: TextStyle };
export type ThemeLayout = {
  column: ViewStyle;
  columnReverse: ViewStyle;
  colCenter: ViewStyle;
  colVCenter: ViewStyle;
  colHCenter: ViewStyle;
  row: ViewStyle;
  rowReverse: ViewStyle;
  rowCenter: ViewStyle;
  rowVCenter: ViewStyle;
  rowHCenter: ViewStyle;
  center: ViewStyle;
  alignItemsCenter: ViewStyle;
  alignItemsStart: ViewStyle;
  alignItemsStretch: ViewStyle;
  justifyContentCenter: ViewStyle;
  justifyContentAround: ViewStyle;
  justifyContentBetween: ViewStyle;
  scrollSpaceAround: ViewStyle;
  scrollSpaceBetween: ViewStyle;
  selfStretch: ViewStyle;
  fill: ViewStyle;
  fullSize: ViewStyle;
  fullWidth: ViewStyle;
  fullHeight: ViewStyle;
  mirror: ViewStyle;
  rotate90: ViewStyle;
};

export type ThemeCommon = {
  [key: string]: StyleType;
  button: { [key: string]: StyleType };
};

export type ThemeImages = { [key: string]: any };

export type Theme = {
  Colors: ThemeColors;
  NavigationColors: ThemeNavigationColors;
  FontSize: ThemeFontSize;
  MetricsSizes: ThemeMetricsSizes;
  Fonts: ThemeFonts;
  Images: ThemeImages;
  Layout: ThemeLayout;
  Gutters: ThemeGutters;
  Common: ThemeCommon;
  Variables?: Partial<ThemeVariables>;
};

export interface ThemeCommonParams {
  Colors: ThemeColors;
  NavigationColors: ThemeNavigationColors;
  FontSize: ThemeFontSize;
  MetricsSizes: ThemeMetricsSizes;
  Fonts: ThemeFonts;
  Images: ThemeImages;
  Layout: ThemeLayout;
  Gutters: ThemeGutters;
  Variables?: Partial<ThemeVariables>;
}

/********************************************************
 *              Gutters with metric sizes               *
 ********************************************************/

export type ThemeGutters = {
  [key in GuttersSizes]: StyleType;
};

/********************************************************
 *              Gutters with metric sizes               *
 ********************************************************/
