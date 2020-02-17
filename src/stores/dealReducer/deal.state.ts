import { Deal } from "models/Deal";

export class DealState {
    constructor(public Deals: Deal[], public SelectedDeal: Deal | null, public ErrorMessage: string, public IsLoading: boolean, public Page: number) {
        Deals = [];
        SelectedDeal = null;
        ErrorMessage = "";
        IsLoading = false;
        Page = 0;
     }
}