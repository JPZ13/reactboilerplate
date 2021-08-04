import { applyMiddleware } from 'redux'
import { createPromise } from 'redux-promise-middleware'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import { REQUEST, RESPONSE, ERROR } from 'state/types/constants'

// makeMiddlewareChain makes all middlewares,
// handles environment dependencies, and returns
// a configured array of middleware
export const makeMiddlewareChain = () => {
  const middleware = []

  const asyncSuffixMiddleware = createPromise({
    promiseTypeSuffixes: [REQUEST, RESPONSE, ERROR],
  })

  middleware.push(asyncSuffixMiddleware)

  // logger must be last middleware
  // else will log other middlewares
  middleware.push(createLogger({
    collapsed: true,
  }))

  return middleware
}

// makeCompose attaches other enhancements
// in this case we attach redux logger
const makeCompose = () => {
  const middlewareChain = makeMiddlewareChain()
  const appliedMiddleware = applyMiddleware(...middlewareChain)

  return composeWithDevTools(appliedMiddleware)
}

export default makeCompose
