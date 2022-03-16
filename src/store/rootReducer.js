import {combineReducers} from "@reduxjs/toolkit";
import {prisonersReducer} from "./prisoners/prisonersReducers";
import findReducer from "./find/findReducers";

const rootReducer = combineReducers({
    prisoners: prisonersReducer,
    find: findReducer
})

export default rootReducer;