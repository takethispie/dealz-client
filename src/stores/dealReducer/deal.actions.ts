import { Deal } from "models/Deal";

export const DEALS_LOAD = "DEALS_LOAD";
export const DEALS_LOAD_SUCCESS = "DEALS_LOAD_SUCCESS";
export const DEALS_LOAD_ERROR = "DEALS_LOAD_ERRROR";
export const DEALS_RESET_PAGINATION = "DEALS_RESET_PAGINATION";
export const DEAL_SELECT = "DEAL_SELECT";
export const DEAL_UNSELECT = "DEAL_UNSELECT";

interface DealsLoad {
    type: typeof DEALS_LOAD;
}

interface DealsLoadSuccess {
    type: typeof DEALS_LOAD_SUCCESS;
    payload: {
        deals: Deal[]
    }
}

interface DealsLoadError {
    type: typeof DEALS_LOAD_ERROR,
    payload: {
        message: string,
    }
}

interface DealsResetPagination {
    type: typeof DEALS_RESET_PAGINATION;
}

interface DealSelect {
    type: typeof DEAL_SELECT,
    payload: {
        selected: Deal
    }
}

interface DealUnselect {
    type: typeof DEAL_UNSELECT
}

export type DealsActionTypes = DealsLoad | DealsLoadSuccess | DealsLoadError | DealsResetPagination | DealSelect | DealUnselect;