import { all } from 'redux-saga/effects'
import dummySagas from 'dummyDomain/sagas'

export default function* rootSaga() {
  yield all([
    ...dummySagas,
  ])
}
