import {combineReducers, createReducer} from "@reduxjs/toolkit";
import {getPrisonersAction, resetErrorAction, setErrorAction, setLoadingAction} from "./prisonersActions";

const isLoadingReducer = createReducer(false, {
    [setLoadingAction]: state => !state
    })

const itemsReducer = createReducer([], {
    [getPrisonersAction]: (_, {payload}) => payload
})

const errorReducer = createReducer('', {
    [setErrorAction]: (_, {payload}) => payload,
    [resetErrorAction]: () => ''
})

export const prisonersReducer = combineReducers({
    isLoading: isLoadingReducer,
    prisonersList: itemsReducer,
    error: errorReducer
})