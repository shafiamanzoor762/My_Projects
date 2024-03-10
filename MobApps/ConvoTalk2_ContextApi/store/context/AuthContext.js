import { useReducer, useContext, createContext } from "react";
import { ADD_USER, DEL_USER } from "../ActionTypes";
import AuthReducer from '../reducers/AuthReducer';

const AuthContext = createContext()

const AuthProvider = (props) => {
    const email=''
    const name=''
    
    const [state, dispatch] = useReducer(AuthReducer, { email: null, name: null })

    const addUser = () => {
        dispatch({ type: ADD_USER, payload: { email, name } })
    }
    const delUser = () => {
        dispatch({ type: DEL_USER, payload: { email, name } })
    }

    return (
        <AuthContext.Provider value={{ state, addUser, delUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}
export {AuthContext,AuthProvider}