import * as default_dark from './default_dark';

import { Theme } from '~/view/theme/theme.type';

type Themes = { [key: string]: Partial<Theme> };

export default {
  default_dark,
} as Themes;
