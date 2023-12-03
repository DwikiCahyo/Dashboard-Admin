export interface Search {
  driver: string;
  date: string;
  time: string;
  passenger: string;
}

export interface Car {
  id: string;
  plate: string;
  manufacture: string;
}

export interface ResponseCar {
  status: number;
  data: Car[];
}
