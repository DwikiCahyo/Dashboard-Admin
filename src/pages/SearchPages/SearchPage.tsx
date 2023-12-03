import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import { Search } from "../../types/types";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Car } from "../../types/types";
import "./styles.css";

function SearchPage() {
  const [data, setData] = useState<Car[]>([]);
  const navigate = useNavigate();
  const locaiton = useLocation();

  //get from url params
  const params = new URLSearchParams(locaiton.search);
  const date = params.get("date") || "";
  const capacity = params.get("capacity") || "";
  const time = params.get("time") || "";

  async function requestCar(search?: Search) {
    try {
      const data = await axios.get("http://localhost:3000/cars", {
        params: {
          capacity: search?.passenger || capacity,
          date: search?.date || date,
          time: search?.time || time,
        },
      });
      const response = await data.data.data;
      console.log(response);
      setData(response);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    requestCar();
  }, []);

  function handleData(search: Search) {
    requestCar(search);
    const params = new URLSearchParams();
    params.set("date", search.date);
    params.set("capacity", search.passenger);
    params.set("time", search.time);

    navigate({
      pathname: locaiton.pathname,
      search: `?${params.toString()}`,
    });
  }

  return (
    <>
      <Navbar />
      <main id="main">
        <Hero hidden={true} />
        <SearchBar
          onSubmitData={handleData}
          date={date}
          capacity={capacity}
          time={time}
        />
        {data.map((car) => (
          <li key={car.id}>{car.plate}</li>
        ))}
      </main>
    </>
  );
}

export default SearchPage;
