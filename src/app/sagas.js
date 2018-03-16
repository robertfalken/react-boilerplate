import { fork } from 'redux-saga/effects'
import dummySagas from 'dummyDomain/sagas'

function* rootSaga() {
  yield [
    fork(...dummySagas),
  ]
}

export default rootSaga
