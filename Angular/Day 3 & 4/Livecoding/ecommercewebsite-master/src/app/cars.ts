import { ICar, carModel } from './car.model';

export const cars: ICar[] = [
  { 

    model: 'Mustang',
    prodYear: '1975',
    qtty: 1,
    reserved: false,
    image: 'https://cdn.pixabay.com/photo/2017/09/01/20/23/ford-2705402_1280.jpg',
    price: 30000
  },
  {
    model: 'Corvette',
    prodYear: '1975',
    qtty: 1,
    reserved: false,
    image: 'https://cdn.pixabay.com/photo/2017/06/19/14/55/camaro-2419612_1280.jpg',
    price: 50000
  },
  {
    model: 'Lamborgini',
    prodYear: '1975',
    qtty: 1,
    reserved: true,
    image: 'https://cdn.pixabay.com/photo/2017/03/14/11/33/yellow-2142781_1280.jpg',
    price: 40000
  },

 ];

// const cars: carModel[] = [
//   new carModel('Mustang', '1975', 'url', 1, 30000, false),
// ];
