import { createAction } from '@reduxjs/toolkit';

const PREFIX = 'app';

export const resetStore = createAction(`${PREFIX}/RESET_STORE`);
