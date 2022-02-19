import { Theme } from '~/view/theme/theme';

import * as default_dark from './default_dark';

type Themes = { [key: string]: Partial<Theme> };

export default {
  default_dark,
} as Themes;
