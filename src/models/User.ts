import { DateTime } from 'luxon';

export class User {
    constructor(
        public Id: string,
        public Nickname: string,
        public CreationDate: DateTime,
    ) {}
}