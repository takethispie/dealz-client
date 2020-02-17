import { createStore, applyMiddleware } from 'redux'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer, defaultRootState } from './root.reducer'

const store = createStore(
  rootReducer,
  defaultRootState,
  composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<any, any>)),
)

export default store