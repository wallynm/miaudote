import { combineReducers } from 'redux'
import loading from './loadingReducer'
import error from './errorReducer'

export default combineReducers({
  loading,
  error
})