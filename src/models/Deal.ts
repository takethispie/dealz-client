import { Vote } from "./Vote";
import { User } from "./User";
import { DateTime } from 'luxon';

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
    public Created: DateTime,
    public Author: User
  ) {
      this.VoteFromUser = Vote.None;
  }
}
