import { Deal } from "models/Deal";
import { Vote } from "models/Vote";

export const DEALS_LOAD = "DEALS_LOAD";
export const DEALS_LOAD_SUCCESS = "DEALS_LOAD_SUCCESS";
export const DEALS_LOAD_ERROR = "DEALS_LOAD_ERRROR";
export const DEALS_RESET_PAGINATION = "DEALS_RESET_PAGINATION";
export const DEAL_SELECT = "DEAL_SELECT";
export const DEAL_UNSELECT = "DEAL_UNSELECT";
export const DEAL_VOTE = "DEAL_VOTE";
export const DEAL_VOTE_SUCCESS = "DEAL_VOTE_SUCCESS";
export const DEAL_VOTE_ERROR = "DEAL_VOTE_ERROR";
export const DEAL_CREATE = "DEAL_CREATE";
export const DEAL_CREATE_SUCCESS = "DEAL_CREATE_SUCCESS";
export const DEAL_CREATE_ERROR = "DEAL_CREATE_ERROR";

interface LoadDeals {
    type: typeof DEALS_LOAD;
    payload: {
        page: number
    }
}

interface LoadDealsSuccess {
    type: typeof DEALS_LOAD_SUCCESS;
    payload: {
        deals: Deal[]
    }
}

interface LoadDealsError {
    type: typeof DEALS_LOAD_ERROR,
    payload: {
        message: string,
    }
}

interface ResetDealsPagination {
    type: typeof DEALS_RESET_PAGINATION;
}

interface SelectDeal {
    type: typeof DEAL_SELECT,
    payload: {
        selected: Deal
    }
}

interface UnselectDeal {
    type: typeof DEAL_UNSELECT
}

interface VoteDeal {
    type: typeof DEAL_VOTE,
    payload: {
        dealId: string,
        vote: Vote
    }
}

interface VoteDealSuccess {
    type: typeof DEAL_VOTE_SUCCESS,
    payload: {
        deals: Deal[]
    }

}

interface VoteDealError {
    type: typeof DEAL_VOTE_ERROR,
    payload: {
        errorMessage: string
    }
}

interface DealCreate {
    type: typeof DEAL_CREATE,
    payload: {
        deal: Deal
    }
}

interface DealCreateSuccess {
    type: typeof DEAL_CREATE_SUCCESS,
    payload: {
        deal: Deal
    }
}

interface DealCreateError {
    type: typeof DEAL_CREATE_ERROR,
    payload: {
        errorMessage: string
    }
}

export type DealsActionTypes = LoadDeals | LoadDealsSuccess | LoadDealsError | ResetDealsPagination | SelectDeal | UnselectDeal 
| VoteDeal | VoteDealSuccess | VoteDealError | DealCreate | DealCreateSuccess | DealCreateError;


export function LoadDeals(page: number): DealsActionTypes {
    return {
        type: DEALS_LOAD,
        payload: {
            page: page
        }
    }
} 


export function LoadDealsError(errorMessage: string): DealsActionTypes {
    return {
        type: DEALS_LOAD_ERROR,
        payload: {
            message: errorMessage
        }
    }
}


export function LoadDealsSuccess(deals: Deal[]): DealsActionTypes {
    return {
        type: DEALS_LOAD_SUCCESS,
        payload: {
            deals
        }
    }
}

export function ResetDealsPagination(): DealsActionTypes {
    return {
        type: DEALS_RESET_PAGINATION
    }    
}

export function VoteDeal(dealId: string, vote: Vote): DealsActionTypes {
    return {
        type: DEAL_VOTE,
        payload: {
            dealId,
            vote
        }
    }
}

export function VoteDealSuccess(deals: Deal[]): DealsActionTypes {
    return {
        type: DEAL_VOTE_SUCCESS,
        payload: {
            deals
        }
    }
}

export function VoteDealError(errorMessage: string): DealsActionTypes {
    return {
        type: DEAL_VOTE_ERROR,
        payload: {
            errorMessage
        }
    }
}

export function CreateDeal(deal: Deal): DealsActionTypes {
    return {
        type: DEAL_CREATE,
        payload: {
            deal
        }
    }
}

export function CreateDealSuccess(deal: Deal): DealsActionTypes {
    return {
        type: DEAL_CREATE_SUCCESS,
        payload: {
            deal
        }
    }
}

export function CreateDealError(errorMessage: string): DealsActionTypes {
    return {
        type: DEAL_CREATE_ERROR,
        payload: {
            errorMessage
        }
    }
}