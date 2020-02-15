import { combineReducers } from 'redux'
import { createForms, combineForms } from 'react-redux-form';
import { defaultAuthState, authReducer } from './authReducer/auth.reducer';



export const defaultRootState = {
    authReducer: defaultAuthState,
}

const rootReducer = combineForms({
    authReducer: authReducer
})

export default rootReducer