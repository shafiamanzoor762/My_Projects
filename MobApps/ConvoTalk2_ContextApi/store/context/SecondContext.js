import { createContext, useContext, useReducer } from "react";
import SecondReducer from "../reducers/SecondReducer";
import {ADD_VALUE,REMOVE_VALUE} from "../ActionTypes";

const AppContext = createContext();

const AppProvider = (props) => {
    const [state, dispatch] = useReducer(SecondReducer, []);
  
    const AddData = (data) => {
      dispatch({ type: ADD_VALUE, payload: data });
    };
    
    const RemoveData = (data) => {
      dispatch({ type: REMOVE_VALUE, payload: data });
    };
    return (
      <AppContext.Provider value={{ state,AddData,RemoveData }}>
      </AppContext.Provider>
    );
  };
  export { AppContext, AppProvider };