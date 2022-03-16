import {createAction} from "@reduxjs/toolkit";

const addTargetAction = createAction('find/addTarget');
const addParentAction = createAction('find/addParent');
const resetAction = createAction('find/reset')

export {addTargetAction, addParentAction, resetAction}