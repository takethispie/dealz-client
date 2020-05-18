import { Vote } from "./Vote";
import { User } from "./User";
import { DateTime } from 'luxon';

export class Deal {
    public VoteFromUser: Vote
    public Expired: boolean;
    public Author?: User

  constructor(
    public Id: string,
    public Title: string,
    public Description: string,
    public Url: string,
    public Image: string,
    public Upvotes: number,
    public Price: number,
    public Created: DateTime,
  ) {
      this.VoteFromUser = Vote.None;
      this.Expired = false;
  }
}
