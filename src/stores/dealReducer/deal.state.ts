import { Deal } from "models/Deal";

export class DealState {
    constructor(public Deals: Deal[], public SelectedDeal: Deal | null, public ErrorMessage: string, public IsLoading: boolean, public Page: number) { }
}