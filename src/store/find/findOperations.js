import axios from "axios";
import {getCurrentDayWithoutDots} from "../../helpers/daysHelpers";
import {resetAction} from "./findActions";

export const addTargetOperation = () => async (dispatch, getState) => {
    try {
        const find = getState().find;
            await axios.post(`${process.env.REACT_APP_BASE_URL}/base/${getCurrentDayWithoutDots()}.json`, find);
            dispatch(resetAction());
    } catch (e) {
        console.log(e)
    }
}