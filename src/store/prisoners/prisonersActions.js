import {createAction} from "@reduxjs/toolkit";

export const getPrisonersAction = createAction('prisoners/getPrisonersAction');

export const setLoadingAction = createAction('prisoners/setLoadingAction');

export const setErrorAction = createAction('prisoners/setErrorAction');
export const resetErrorAction = createAction('prisoners/resetErrorAction');