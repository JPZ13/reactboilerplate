import { createStore } from 'redux'

import reducers from 'state/reducers'
import makeCompose from 'state/middleware'
import initialState from 'state/stores'

const store = createStore(
  reducers,
  initialState,
  makeCompose(),
)

export default store
