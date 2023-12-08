import { useCar } from "../../context/cars/CarProvider";

export default function ListTitle() {
  const { cars } = useCar();
  return <h4>Jumlah mobil yang tersedia {cars.length}</h4>;
}
