import Breadcrumbs from "../../../components/Admin/Breadcrumbs";
import { NavLink, useLocation } from "react-router-dom";
import CardCars from "../../../components/Admin/CardCars";
import { useCarStore } from "../../../store/carStore";
import { useEffect } from "react";

function ListCarPage() {
  const cars = useCarStore((state) => state.cars);
  const fetchCars = useCarStore((state) => state.fetchCars);
  const isSuccesDelete = useCarStore((state) => state.isSuccessDelete);
  const location = useLocation()
    .pathname.split("/")
    .filter((name) => name !== "");

  useEffect(() => {
    fetchCars({ isPaginate: "false" });
  }, [isSuccesDelete]);

  return (
    <div>
      <div className="mt-3 ">
        <Breadcrumbs location={location} />
        <div className="d-md-flex align-items-center justify-content-between">
          <h3 className="fw-semibold mt-4">List Car</h3>
          <NavLink to="newcar" className="btn btn-primary">
            + Add New Car
          </NavLink>
        </div>
        <div className="mt-4 ">
          <div className="row">
            {cars.map((car) => (
              <div className="col-12 col-md-4 mt-4">
                <CardCars cars={car} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCarPage;
