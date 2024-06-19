import { IPet, petModel } from './pet.model';

export const pets: IPet[] = [
  // {
  //     name: '',
  //     birthYear: '',
  //     image: '/pets/',
  //     age: ,
  //     lifeSpan: '',
  //     price: ,
  //     race: '',
  //     raceType: '',
  //     gender:'',
  //     descr:
  //       '',
  //   },

  {
    name: 'Dexter',
    birthYear: '20.08.2014',
    image: '/pets/french-bulldog.jpg',
    age: 9,
    lifeSpan: 'avg. 10-12 years',
    price: 2300,
    race: 'Dog',
    raceType: 'French Bulldog',
    gender: 'Male',
    descr:
      'Frenchies are good for apartment life. They can be fairly active indoors and will do okay without a yard. They do not do well in temperature extremes.',
  },
  {
    name: 'Charlie',
    birthYear: '14.02.2019',
    image: '/pets/pembroke-welsh-corgi.jpg',
    age: 5,
    lifeSpan: 'avg. 12-14 years',
    price: 1400,
    race: 'Dog',
    raceType: 'Pembroke Welsh Corgi',
    gender: 'Male',
    descr:
      'Corgis will do fine in an apartment if they are sufficiently exercised. With enough exercise they can be calm indoors, but will be very active if they are lacking. Will do okay without a yard so long as they are taken for daily walks.',
  },
  {
    name: 'Bailey',
    birthYear: '05.07.2017',
    image: '/pets/golden-retriever.jpg',
    age: 6,
    lifeSpan: 'avg. 10-12 years',
    price: 1800,
    race: 'Dog',
    raceType: 'Golden Retriever',
    gender: 'Female',
    descr:
      'This breed will do okay in an apartment if sufficiently exercised. They are moderately active indoors and will do best with at least a medium to large yard.',
  },
  {
    name: 'Luna',
    birthYear: '28.04.2014',
    image: '/pets/german-shepherd.jpg',
    age: 10,
    lifeSpan: 'avg. 10-13',
    price: 1000,
    race: 'Dog',
    raceType: 'German Shepherd Dog',
    gender: 'Female',
    descr:
      'The German Shepherd will do okay in an apartment if sufficiently exercised. They are relatively inactive indoors and do best with at least a large yard.',
  },
];
