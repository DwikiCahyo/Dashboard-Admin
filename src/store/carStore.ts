import { create } from "zustand";
import { Car, ResponseCar, Search, ValidationError } from "../types/types";
import axios, { AxiosError } from "axios";

interface CarState {
  cars: Car[];
  car: Car | null;
  pagesTotal: number;
  page: number;
  pageSize: number;
  isSuccessDelete: boolean;
  isSuccessPost: boolean;
  isAvailable: string;
  fetchCars: (search?: Search) => void;
  fetchCar: (id: string | undefined, token: string) => void;
  setPages: (page: number) => void;
  setPageSize: (size: number) => void;
  deleteCars: (id: string, token: string) => void;
  setSuccessDelete: (value: boolean) => void;
  setSuccessPost: (value: boolean) => void;
  setAvailable: (availbale: string) => void;
}

export const useCarStore = create<CarState>()((set) => ({
  cars: [],
  car: null,
  isAvailable: "",
  pagesTotal: 0,
  page: 1,
  pageSize: 10,
  isSuccessDelete: false,
  isSuccessPost: false,
  fetchCars: async (search?: Search) => {
    try {
      const response = await axios.get<ResponseCar>(
        "http://localhost:3000/cars",
        {
          params: {
            available: search?.available,
            capacity: search?.passenger,
            date: search?.date,
            time: search?.time,
            page: search?.page,
            pageSize: search?.pageSize || 10,
            isPaginate: search?.isPaginate,
          },
        }
      );
      set(() => ({
        cars: response.data.data,
        pagesTotal: response.data.totalPages,
      }));
    } catch (error) {
      if (axios.isAxiosError<ValidationError, Record<string, unknown>>(error)) {
        console.log(error.code);
        console.log(error.message);
      } else {
        console.log(error);
      }
    }
  },
  fetchCar: async (id: string | undefined, token: string) => {
    try {
      const response = await axios.get(`http://localhost:3000/cars/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      set(() => ({
        car: response.data.data,
      }));
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data.message);
      }
    }
  },
  setPages: (page: number) => {
    set(() => ({
      page: page,
    }));
  },
  setPageSize: (size: number) => {
    set(() => ({
      pageSize: size,
    }));
  },

  deleteCars: async (id: string, token: string) => {
    try {
      const response = await axios.delete(`http://localhost:3000/cars/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("sukses delete", response.data.message);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data.message);
      }
    }
  },
  setSuccessDelete: (value: boolean) => {
    set(() => ({
      isSuccessDelete: value,
    }));
  },
  setSuccessPost: (value: boolean) => {
    set(() => ({
      isSuccessPost: value,
    }));
  },
  setAvailable: (value: string) => {
    set(() => ({
      isAvailable: value,
    }));
  },
}));
