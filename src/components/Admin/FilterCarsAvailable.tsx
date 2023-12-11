import { useCarStore } from "../../store/carStore";

function FilterAvailable() {
  const setIsAvailable = useCarStore((state) => state.setAvailable);
  return (
    <>
      <label style={{ width: "200px", marginTop: "16px" }}>
        Car Availability
      </label>
      <select
        className="form-select mt-3"
        id="Available"
        style={{ width: "auto" }}
        defaultValue="default"
        onChange={(e) => setIsAvailable(e.target.value)}
        required
      >
        <option value="">All</option>
        <option value="true">Available</option>
        <option value="false">Not Available</option>
      </select>
    </>
  );
}

export default FilterAvailable;
