import { all, SagaGenerator } from 'typed-redux-saga';

import { watchUser } from '~/modules/user/sagas';

export function* rootSaga(): SagaGenerator<any> {
  yield* all([watchUser()]);
}
