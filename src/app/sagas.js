import { fork } from 'redux-saga/effects'
import dummySagas from 'demoDomain/sagas'

function* rootSaga() {
  yield [
    fork(...dummySagas),
  ]
}

export default rootSaga
