import { JwtPayload } from "jwt-decode";

export interface Search {
  available?: string;
  driver?: string;
  date?: string;
  time?: string;
  passenger?: string;
  page?: number;
  pageSize?: number;
  isPaginate?: string;
}

export interface SearchParams {
  date: string;
  time: string;
  passenger: string;
}

export interface Car {
  id: string;
  plate: string;
  manufacture: string;
  image: string;
  model: string;
  type: string;
  description: string;
  transmission: string;
  capacity: number;
  rentPerDay: number;
  availableAt: Date;
  available: boolean;
  year: number;
  options: string;
  specs: string;
  created_by: string;
  updated_by: string;
  deleted_by: string;
}

export interface ResponseCar {
  status: number;
  limit: number;
  page: number;
  totalPages: number;
  data: Car[];
}

export interface ResponsePostCar {
  status: number;
  message: string;
  data: Omit<Car, "id">;
}

export interface ValidationError {
  meesage: string;
  errors: Record<string, string[]>;
}

export interface User {
  email: string;
  id: number;
  role_id: number;
}

export interface ResponseUser {
  status: number;
  data: { email: string; id: number; token: string };
}

export interface CustomJwtPayload extends JwtPayload {
  email: string;
  role_id: number;
  id: number;
}
