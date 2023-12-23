import Breadcrumbs from "../../../components/Admin/Breadcrumbs";
import { NavLink, useLocation } from "react-router-dom";
import CardCars from "../../../components/Admin/CardCars";
import { useCarStore } from "../../../store/carStore";
import { useEffect } from "react";
import FilterAvailable from "../../../components/Admin/FilterCarsAvailable";

function ListCarPage() {
  const { cars, fetchCars, isSuccessDelete, isSuccessPost, isAvailable } =
    useCarStore();

  const location = useLocation()
    .pathname.split("/")
    .filter((name) => name !== "");

  useEffect(() => {
    fetchCars({ isPaginate: "false", available: isAvailable });
  }, [isSuccessDelete, isSuccessPost, isAvailable]);

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
        <FilterAvailable />
        <div className="mt-4 ">
          <div className="row">
            {cars.map((car, index) => (
              <div className="col-12 col-md-4 mt-4">
                <CardCars cars={car} key={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCarPage;
