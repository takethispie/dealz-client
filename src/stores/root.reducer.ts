import { combineReducers } from 'redux'
import { createForms, combineForms } from 'react-redux-form';
import { defaultAuthState, authReducer } from './authReducer/auth.reducer';
import { defaultDealsState, DealsReducer } from './dealReducer/deal.reducer';



export const defaultRootState = {
    authReducer: defaultAuthState,
    DealsReducer: defaultDealsState
}

export const rootReducer = combineReducers({
    authReducer: authReducer,
    dealReducer: DealsReducer
})

export type RootState = ReturnType<typeof rootReducer>