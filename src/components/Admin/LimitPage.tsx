import { useCarStore } from "../../store/carStore";

function LimitPage() {
  //TODO :Change more reusable
  let options = [];
  const setPageSize = useCarStore((state) => state.setPageSize);

  for (let number = 1; number <= 5; number++) {
    options.push(
      <>
        <option value={number * 10}>{number * 10}</option>
      </>
    );
  }

  return (
    <div>
      <label className="text-body-secondary fw-light fs-6">Limit</label>
      <select
        className="form-select mt-1"
        aria-label="page "
        style={{ width: "auto" }}
        onChange={(e) => setPageSize(parseInt(e.target.value))}
      >
        {options}
      </select>
    </div>
  );
}

export default LimitPage;
