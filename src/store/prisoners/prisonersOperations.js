import axios from "axios";
import {getPrisonersAction, setLoadingAction} from "./prisonersActions";

export const getPrisonersOperation = () => async (dispatch) => {
    dispatch(setLoadingAction())
    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/prisoners/list.json`);
        response.data.length && dispatch(getPrisonersAction(response.data))
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(setLoadingAction())
    }
}