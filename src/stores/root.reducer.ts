import { combineReducers } from 'redux'
import { createForms, combineForms } from 'react-redux-form';
import { defaultAuthState, authReducer } from './authReducer/auth.reducer';
import { defaultDealsState, DealsReducer } from './dealReducer/deal.reducer';



export const defaultRootState = {
    authReducer: defaultAuthState,
    dealsReducer: defaultDealsState
}

const rootReducer = combineForms({
    authReducer,
    DealsReducer
})

export default rootReducer