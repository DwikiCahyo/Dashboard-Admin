import { Pagination } from 'react-bootstrap';
import { useCarStore } from '../../store/carStore';

interface PaginationAdmin {
  page: number;
  totalPages: number;
}

function PaginationAdmin({ totalPages, page }: PaginationAdmin) {
  const items = [];
  const setPage = useCarStore((state) => state.setPages);

  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === page}
        onClick={() => setPage(number)}
      >
        {number}
      </Pagination.Item>,
    );
  }
  return (
    <div className="mt-3 ">
      <Pagination>{items}</Pagination>
    </div>
  );
}

export default PaginationAdmin;
