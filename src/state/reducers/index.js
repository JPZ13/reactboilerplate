import { combineReducers } from 'redux'

import boilerplateReducer from 'state/reducers/boilerplate'


const reducers = combineReducers({
  boilerplate: boilerplateReducer,
})

export default reducers
