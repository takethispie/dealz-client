import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { DealState } from "./deal.state";
import { DealWithPaging } from "services/DealService";
import { LoadDeals, LoadDealsSuccess, LoadDealsError } from "./deal.actions";

export const ThunkLoadDeals = (page: number): 
ThunkAction<void, DealState, unknown, Action<string>> => async dispatch => {
    dispatch(LoadDeals(page));
    try {
        const response = await DealWithPaging(page);
        dispatch(LoadDealsSuccess(response));
    } catch (error) {
        dispatch(LoadDealsError("Error loading deals"));
    }
}
