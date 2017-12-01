import { combineReducers } from 'redux'
import localTime from './localTime'

// 使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
    localTime
})

export default rootReducer