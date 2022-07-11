import { SagaIterator } from 'redux-saga';
import { put, takeLatest } from 'typed-redux-saga';

import { resetStore } from '~/modules/app/actions';

import { signOut } from './actions';

function* signOutSaga(): SagaIterator {
  yield* put(resetStore());
}

export function* watchUser(): SagaIterator {
  yield* takeLatest(signOut, signOutSaga);
}
