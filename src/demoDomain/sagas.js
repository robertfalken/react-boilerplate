import { put, takeLatest } from 'redux-saga/effects'

function* doAsync(action) {
  const mockApiCall = () => new Promise((resolve) => {
    setTimeout(() => { resolve(action.payload) }, 1000)
  })

  const result = yield mockApiCall()
  yield put({ type: 'ASYNC_SUCCESS', payload: result })
}

function* saga() {
  yield takeLatest('ASYNC_REQUEST', doAsync)
}

export default [saga]
