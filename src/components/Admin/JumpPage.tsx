import { useState } from "react";
import { useCarStore } from "../../store/carStore";

interface JumpPageProps {
  totalPage: number;
}

function JumpPage({ totalPage }: JumpPageProps) {
  //TODO : Change more reusable
  const [optValue, setOptValue] = useState(1);
  const setPage = useCarStore((state) => state.setPages);

  const options = [];
  for (let number = 1; number <= totalPage; number++) {
    options.push(
      <>
        <option value={number} key={number}>
          {number}
        </option>
      </>
    );
  }

  function handleClick(page: number) {
    setPage(page);
  }

  return (
    <div>
      <label className="text-body-secondary fw-light fs-6">Jump to page</label>
      <div className="d-flex mt-1">
        <select
          className="form-select "
          aria-label="page "
          style={{ width: "auto" }}
          onChange={(e) => setOptValue(parseInt(e.target.value))}
        >
          {options}
        </select>
        <button
          className="btn btn-primary ms-1"
          onClick={() => handleClick(optValue)}
        >
          Go
        </button>
      </div>
    </div>
  );
}

export default JumpPage;
