export interface IBlog {
  topic: string;
  username: string;
  profileImage: string;
  postDate: string;
  postTime: string;
  blog: string;
  likes: number;
}

export class blogModel {
  constructor(
    public topic: string,
    public username: string,
    public profileImage: string,
    public postDate: string,
    public postTime: string,
    public blog: string,
    public race: string,
    public likes: number
  ) {}
}
