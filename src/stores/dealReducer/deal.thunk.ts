import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { DealState } from "./deal.state";
import { DealWithPaging, DoVoteDeal } from "services/DealService";
import { LoadDeals, LoadDealsSuccess, LoadDealsError, VoteDeal, VoteDealSuccess, VoteDealError } from "./deal.actions";
import { Vote } from "models/Vote";
import { Deal } from "models/Deal";

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


export const ThunkReloadDeals = (): 
ThunkAction<void, DealState, unknown, Action<string>> => async dispatch => {
    dispatch(LoadDeals(0));
    try {
        const response = await DealWithPaging(0);
        dispatch(LoadDealsSuccess(response));
    } catch (error) {
        dispatch(LoadDealsError("Error loading deals"));
    }
}


export const ThunkVoteDeal = (dealId: string, vote: Vote, deals: Deal[]):
ThunkAction<void, DealState, unknown, Action<string>> => async dispatch => {
    dispatch(VoteDeal(dealId, vote));
    try {
        const response = await DoVoteDeal(dealId, vote);
        if(response != "") {
            let newDeals = deals.map(deal => {
                if(deal.Id != dealId) return deal;
                switch(vote) {
                    case Vote.Down:
                        if(deal.VoteFromUser == Vote.Down) {
                            deal.Upvotes++;
                            deal.VoteFromUser = Vote.None;
                            return deal;
                        }
                        deal.Upvotes--;
                        if(deal.VoteFromUser == Vote.Up) deal.Upvotes--;
                        deal.VoteFromUser = Vote.Down;
                        return deal;

                    case Vote.Up:
                        if(deal.VoteFromUser == Vote.Up) {
                            deal.Upvotes--;
                            deal.VoteFromUser = Vote.None;
                            return deal;
                        }
                        deal.Upvotes++;
                        if(deal.VoteFromUser == Vote.Down) deal.Upvotes++;
                        deal.VoteFromUser = Vote.Up;
                        return deal;

                    case Vote.None:
                        deal.VoteFromUser = Vote.None;
                        return deal;

                    default:
                        return deal;
                }
            })
            dispatch(VoteDealSuccess(newDeals));
        } 
    } catch (error) {
        dispatch(VoteDealError("Erreur lors du vote"));
    }
}
