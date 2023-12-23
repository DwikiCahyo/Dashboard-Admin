/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useState, useEffect } from "react";
import { Car, Search, SearchParams } from "../../types/types";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

type CarContextProps = {
  cars: Car[];
  fetchCars: (search?: Search | undefined) => Promise<void>;
  setUrlParams: (params: SearchParams) => void;
  totalPages: number;
  page: number;
};

type CarProviderProps = {
  children: React.ReactNode;
};

export const CarContext = createContext<CarContextProps | undefined>(undefined);

export function useCar() {
  const context = useContext(CarContext);
  if (context === undefined) {
    throw new Error("useCar must be used within a CarProvider");
  }
  return context;
}

export function CarProvider({ children }: CarProviderProps) {
  const [cars, setCars] = useState<Car[]>([]);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();
  const location = useLocation();

  function setUrlParams(param: SearchParams) {
    const params = new URLSearchParams();
    params.set("date", param.date);
    params.set("capacity", param.passenger);
    params.set("time", param.time);

    navigate({
      pathname: location.pathname,
      search: `?${params.toString()}`,
    });
  }

  const parameter = new URLSearchParams(location.search);
  const date = parameter.get("date") || "";
  const capacity = parameter.get("capacity") || "";
  const time = parameter.get("time") || "";

  async function fetchCars(search?: Search) {
    // eslint-disable-next-line no-useless-catch
    try {
      const data = await axios.get("http://localhost:3000/cars", {
        params: {
          capacity: search?.passenger || capacity,
          date: search?.date || date,
          time: search?.time || time,
          page: search?.page,
          pageSize: search?.pageSize,
          isPaginate: search?.isPaginate,
        },
      });

      const response = await data.data.data;
      const totalPageResponse = await data.data.totalPages;
      const page = await data.data.page;
      setCars(response);
      setTotalPage(totalPageResponse);
      setPage(page);

      console.log(response);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    fetchCars();
    console.log("fetching");
  }, []);

  const CarContextValue: CarContextProps = {
    cars,
    fetchCars,
    setUrlParams,
    totalPages: totalPage,
    page: page,
  };

  return (
    <CarContext.Provider value={CarContextValue}>
      {children}
    </CarContext.Provider>
  );
}
