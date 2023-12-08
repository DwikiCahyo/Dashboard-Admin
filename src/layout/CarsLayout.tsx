import Sidebar from "../components/Admin/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

function CarLayout() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar title="List Car" />
        <div className="col-12 col-md-10 bg-light min-vh-100 px-5 py-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default CarLayout;
