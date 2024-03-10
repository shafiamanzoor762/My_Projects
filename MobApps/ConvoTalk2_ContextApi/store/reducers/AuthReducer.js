import {ADD_USER,DEL_USER } from '../ActionTypes'

// Logic Here
const AuthReducer = (state, action) => {

    switch (action.type) {
        case ADD_USER:
            let newState = { ...state }
            newState=action.payload
            return newState

        case DEL_USER:
            return {email:null,name:null}

        default:
            return state
    }
}
export default AuthReducer