export interface ICar {
  model: string;
  prodYear: string;
  image: string;
  qtty: number;
  price: number;
  reserved: boolean;
}

export class carModel {
  constructor(
    public model: string,
    public prodYear: string,
    public image: string,
    public qtty: number,
    public price: number,
    public reserved: boolean
  ) {}
}
