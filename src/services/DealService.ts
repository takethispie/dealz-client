import getAxios from "./ApiBase";
import { Deal } from "models/Deal";
import { Vote } from "models/Vote";
import { User } from "models/User";
import { DateTime } from "luxon";

export const DealWithPaging = async (page: number) => {
  //const response = await getAxios().get("/user/offers/" + page);
  //return response.data;
  let author = new User("0", "jeanjako", DateTime.local(2019, 10, 10));
  let deals = [
    new Deal(
      "0",
      "test",
      "this is a test deal",
      "https://www.boulanger.com/ref/1123891",
      "assets/images/samsung-tv.webp",
      10,
      713.3,
      DateTime.local(2020, 10, 10, 14, 30),
      author
    ),
    new Deal(
      "1",
      "test 2",
      "this is a test deal",
      "https://www.boulanger.com/ref/1123891",
      "assets/images/samsung-tv.webp",
      99,
      1400,
      DateTime.local(2010, 3, 10, 14, 30),
      author
    )
  ];
  return Promise.resolve(deals);
};

export const DoVoteDeal = (dealId: string, vote: Vote) => {
  return Promise.resolve(dealId);
};
