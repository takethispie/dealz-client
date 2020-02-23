import getAxios from "./ApiBase";
import { Deal } from "models/Deal";
import { Vote } from "models/Vote";

export const DealWithPaging = async (page: number) => {
    //const response = await getAxios().get("/user/offers/" + page);
    //return response.data;
    let deals = [ 
        new Deal("0", "test", "this is a test deal", "https://www.boulanger.com/ref/1123891", "assets/images/samsung-tv.webp", 10, 713.30)
    ];
    return Promise.resolve(deals);
}


export const DoVoteDeal = (dealId: string, vote: Vote) => {
    return Promise.resolve(dealId);
}