import { Pagination } from "react-bootstrap";
import { useCar } from "../../context/cars/CarProvider";

function PaginationComponent() {
  const { fetchCars, page, totalPages } = useCar();

  const items = [];

  function handlePaginate(number: number) {
    fetchCars({ page: number });
  }

  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === page}
        onClick={() => handlePaginate(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div className="mt-3 ">
      <Pagination>{items}</Pagination>
    </div>
  );
}

export default PaginationComponent;
