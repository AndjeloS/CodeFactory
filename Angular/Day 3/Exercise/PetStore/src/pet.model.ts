export interface IPet {
  name: string;
  birthYear: string;
  image: string;
  age: number;
  lifeSpan: string;
  price: number;
  race: string;
  raceType: string;
  descr: string;
  reserved: boolean;
}

export class petModel {
  constructor(
    public name: string,
    public birthYear: string,
    public image: string,
    public age: number,
    public lifeSpan: string,
    public price: number,
    public race: string,
    public raceType: string,
    public descr: string,
    public reserved: boolean
  ) {}
}
