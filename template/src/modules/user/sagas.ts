import { getType } from 'deox';
import { SagaIterator } from 'redux-saga';
import { put, takeLatest } from 'typed-redux-saga';

import { signOut } from './actions';

import { resetStore } from '~/modules/app/actions';

function* signOutSaga(): SagaIterator {
  yield* put(resetStore());
}

export function* watchUser(): SagaIterator {
  yield* takeLatest(getType(signOut), signOutSaga);
}
