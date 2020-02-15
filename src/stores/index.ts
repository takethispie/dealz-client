import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer, { defaultRootState } from './root.reducer'

const store = createStore(
  rootReducer,
  defaultRootState,
  composeWithDevTools(applyMiddleware(thunk)),
)

export default store