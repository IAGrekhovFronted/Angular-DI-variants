export type CatFact = {
  fact: string;
  length: number;
};

export type Breed = {
  breed: 'string';
  country: 'string';
  origin: 'string';
  coat: 'string';
  pattern: 'string';
};

export type BreedResponse = {
  current_page: number;
  data: Array<Breed>;
};
