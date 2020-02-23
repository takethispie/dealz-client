import { Vote } from "./Vote";

export class Deal {
    public VoteFromUser: Vote

  constructor(
    public Id: string,
    public Title: string,
    public Description: string,
    public Url: string,
    public Image: string,
    public Upvotes: number,
    public Price: number,
    public Created: Date
  ) {
      this.VoteFromUser = Vote.None;
  }
}
