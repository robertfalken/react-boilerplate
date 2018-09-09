import { combineReducers } from 'redux'

const home = (state = {
  header: 'Home Scene',
  content: 'Remove me, or add your own content!',
}) => state

export default combineReducers({
  home,
})
