import { DealState } from "./deal.state"
import { DealsActionTypes, DEALS_LOAD, DEALS_LOAD_SUCCESS, DEALS_LOAD_ERROR, DEAL_SELECT, DEAL_UNSELECT, DEALS_RESET_PAGINATION, DEAL_VOTE, DEAL_VOTE_ERROR, DEAL_VOTE_SUCCESS } from "./deal.actions"

export const defaultDealsState: DealState  = {
  Deals: [],
  SelectedDeal: null,
  ErrorMessage: "",
  IsLoading: false,
  Page: 0
}

export function DealsReducer(state: DealState = defaultDealsState, action: DealsActionTypes): DealState {
  switch (action.type) {
    case DEALS_LOAD:
      return { ...state, IsLoading: true }
    case DEALS_LOAD_SUCCESS:
      return { ...state, Deals: action.payload.deals, IsLoading: false, Page: state.Page++ }
    case DEALS_LOAD_ERROR:
      return { ...state, ErrorMessage: action.payload.message, IsLoading: false }
    case DEALS_RESET_PAGINATION:
      return {...state, Page: 0}
    case DEAL_SELECT:
      return { ...state, SelectedDeal: action.payload.selected }
    case DEAL_UNSELECT:
      return { ...state, SelectedDeal: null };
    case DEAL_VOTE:
      return {...state}
    case DEAL_VOTE_ERROR:
      return {...state, ErrorMessage: action.payload.errorMessage}
    case DEAL_VOTE_SUCCESS:
      return {...state, Deals: action.payload.deals}
    default:
      return state
  }
}