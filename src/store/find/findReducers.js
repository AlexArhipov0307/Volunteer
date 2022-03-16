import {combineReducers, createReducer} from "@reduxjs/toolkit";
import {addParentAction, addTargetAction, resetAction} from "./findActions";

const targetReducer = createReducer({}, {
    [addTargetAction]: (_, {payload}) => payload,
    [resetAction]: () => ({})
});

const parentReducer = createReducer({}, {
    [addParentAction]: (_, {payload}) => payload,
    [resetAction]: () => ({})
})

const findReducer = combineReducers({
    target: targetReducer,
    parent: parentReducer
})

export default findReducer