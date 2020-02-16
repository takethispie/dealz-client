import { Deal } from "models/Deal";

export const DEALS_LOAD = "DEALS_LOAD";
export const DEALS_LOAD_SUCCESS = "DEALS_LOAD_SUCCESS";
export const DEALS_LOAD_ERROR = "DEALS_LOAD_ERRROR";
export const DEALS_RESET_PAGINATION = "DEALS_RESET_PAGINATION";
export const DEAL_SELECT = "DEAL_SELECT";
export const DEAL_UNSELECT = "DEAL_UNSELECT";

interface LoadDeals {
    type: typeof DEALS_LOAD;
    payload: {
        page: number
    }
}

interface DealsLoadSuccess {
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

export type DealsActionTypes = LoadDeals | DealsLoadSuccess | LoadDealsError | ResetDealsPagination | SelectDeal | UnselectDeal;


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