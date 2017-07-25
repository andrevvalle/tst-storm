import { combineReducers } from 'redux'
import ShotsReducer from './reducer-shots'

const allReducers = combineReducers({
  shots: ShotsReducer
})

export default allReducers
