import { reduce } from "lodash";
import React, {Children, createContext, useContext, useReducer } from "react";

//Prepares the Data Layer
export const StateContext = createContext();

//Wrap application and provide Data Layer to every component
export const StateProvider = ({ reducer, initialState, children }) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull Information from the Data Layer
export const useStateValue = () => useContext(StateContext);