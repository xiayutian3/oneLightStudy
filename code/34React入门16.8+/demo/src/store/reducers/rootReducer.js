
import {combineReducers} from 'redux'
import count from './countReducer'
import data from './dataReducer'

//合并 所有的reducer

export default combineReducers({
  count,
  data
})