import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../../components/Admin/Breadcrumbs";

function NewCar() {
  const location = useLocation()
    .pathname.split("/")
    .filter((name) => name !== "");
  return (
    <div className="mt-3">
      <Breadcrumbs location={location} />
    </div>
  );
}

export default NewCar;
