export interface IPet {
  name: string;
  birthYear: string;
  image: string;
  age: number;
  price: number;
  race: string;
  descr: string;
  reserved: boolean;
}

export class petModel {
  constructor(
    public name: string,
    public birthYear: string,
    public image: string,
    public age: number,
    public price: number,
    public race: string,
    public descr: string,
    public reserved: boolean
  ) {}
}
