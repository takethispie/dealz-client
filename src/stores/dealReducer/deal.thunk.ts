import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { DealState } from "./deal.state";
import { DealWithPaging } from "services/DealService";
import { LoadDeals, LoadDealsSuccess } from "./deal.actions";

export const ThunkLoadDeals = (page: number): ThunkAction<void, DealState, unknown, Action<string>> => async dispatch => {
    dispatch(LoadDeals(page));
    const response = await DealWithPaging(page);
    dispatch(LoadDealsSuccess(response));
}
