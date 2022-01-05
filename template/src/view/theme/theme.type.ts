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
export type ThemeMetricsSizes = { tiny: number; small: number; regular: number; large: number };

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
  /**
   * auto
   */
  autoBMargin: StyleType;
  autoLMargin: StyleType;
  autoRMargin: StyleType;
  autoTMargin: StyleType;
  /**
   *  large
   */
  largeBMargin: StyleType;
  largeBPadding: StyleType;
  largeHMargin: StyleType;
  largeHPadding: StyleType;
  largeLMargin: StyleType;
  largeLPadding: StyleType;
  largeRMargin: StyleType;
  largeRPadding: StyleType;
  largeTMargin: StyleType;
  largeTPadding: StyleType;
  largeVMargin: StyleType;
  largeVPadding: StyleType;
  /**
   *  regular
   */
  regularBMargin: StyleType;
  regularBPadding: StyleType;
  regularHMargin: StyleType;
  regularHPadding: StyleType;
  regularLMargin: StyleType;
  regularLPadding: StyleType;
  regularRMargin: StyleType;
  regularRPadding: StyleType;
  regularTMargin: StyleType;
  regularTMarginMinus: StyleType;
  regularTPadding: StyleType;
  regularVMargin: StyleType;
  regularVPadding: StyleType;
  /**
   *    small
   */
  smallBMargin: StyleType;
  smallBPadding: StyleType;
  smallHMargin: StyleType;
  smallHPadding: StyleType;
  smallLMargin: StyleType;
  smallLPadding: StyleType;
  smallRMargin: StyleType;
  smallRPadding: StyleType;
  smallTMargin: StyleType;
  smallTPadding: StyleType;
  smallVMargin: StyleType;
  smallVPadding: StyleType;
  /**
   *    tiny
   */
  tinyBMargin: StyleType;
  tinyBPadding: StyleType;
  tinyHMargin: StyleType;
  tinyHPadding: StyleType;
  tinyLMargin: StyleType;
  tinyLPadding: StyleType;
  tinyRMargin: StyleType;
  tinyRPadding: StyleType;
  tinyTMargin: StyleType;
  tinyTPadding: StyleType;
  tinyVMargin: StyleType;
  tinyVPadding: StyleType;
};

export type MetricStyleNames =
  /**
   *    auto
   */
  | 'autoBMargin'
  | 'autoLMargin'
  | 'autoRMargin'
  | 'autoTMargin'
  /**
   *    large
   */
  | 'largeBMargin'
  | 'largeBPadding'
  | 'largeHMargin'
  | 'largeHPadding'
  | 'largeLMargin'
  | 'largeLPadding'
  | 'largeRMargin'
  | 'largeRPadding'
  | 'largeTMargin'
  | 'largeTMarginMinus'
  | 'largeTPadding'
  | 'largeVMargin'
  | 'largeVPadding'
  /**
   *    regular
   */
  | 'regularBMargin'
  | 'regularBPadding'
  | 'regularHMargin'
  | 'regularHPadding'
  | 'regularLMargin'
  | 'regularLPadding'
  | 'regularRMargin'
  | 'regularRPadding'
  | 'regularTMargin'
  | 'regularTMarginMinus'
  | 'regularTPadding'
  | 'regularVMargin'
  | 'regularVPadding'
  /**
   *    small
   */
  | 'smallBMargin'
  | 'smallBPadding'
  | 'smallHMargin'
  | 'smallHPadding'
  | 'smallLMargin'
  | 'smallLPadding'
  | 'smallRMargin'
  | 'smallRPadding'
  | 'smallTMargin'
  | 'smallTMarginMinus'
  | 'smallTPadding'
  | 'smallVMargin'
  | 'smallVPadding'
  /**
   *    tiny
   */
  | 'tinyBMargin'
  | 'tinyBPadding'
  | 'tinyHMargin'
  | 'tinyHPadding'
  | 'tinyLMargin'
  | 'tinyLPadding'
  | 'tinyRMargin'
  | 'tinyRPadding'
  | 'tinyTMargin'
  | 'tinyTPadding'
  | 'tinyVMargin'
  | 'tinyVPadding';

/********************************************************
 *              Gutters with metric sizes               *
 ********************************************************/
