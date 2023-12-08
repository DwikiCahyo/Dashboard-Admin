import { NavLink, Navigate, Outlet } from "react-router-dom";
import "./styles.css";
import { useAuthStore } from "../store/authStore";
import { useEffect } from "react";
import { User } from "../types/types";
import { getRoleJwt } from "../utils/utils";

function AdminLayout() {
  const token = useAuthStore((state) => state.token);
  const userInfo = useAuthStore((state) => state.userInfo);
  const setUserInfo = useAuthStore((state) => state.setUserInfo);
  let payload;

  if (token !== null) {
    payload = getRoleJwt(token);
  }

  const user: User = {
    email: payload?.email || "",
    id: payload?.id || 0,
    role_id: payload?.role_id || 1,
  };

  console.log(userInfo);

  useEffect(() => {
    if (userInfo.email === "") setUserInfo(user);
  }, [token]);

  return (
    <div className="d-flex" id="wrapper">
      {/* <!-- Sidebar--> */}
      <div className="border-end" id="sidebar-wrapper">
        <div className="sidebar-heading  ">Car Rent</div>
        <div className="list-group list-group-flush">
          <NavLink
            className="list-group-item list-group-item-action "
            to="dashboard"
          >
            <div className="d-flex flex-column align-items-center">
              <p>Image</p>
              <p>Dashboard</p>
            </div>
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action "
            to="cars"
          >
            <div className="d-flex flex-column align-items-center">
              <p>Image</p>
              <p>Cars</p>
            </div>
          </NavLink>
        </div>
      </div>
      {/* <!-- Page content wrapper--> */}
      <div id="page-content-wrapper">
        {/* <!-- Top navigation--> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <div className="container-fluid">
            <h5 className="fw-bold">Rent Car</h5>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <div className="navbar-nav ms-auto mt-4 mt-lg-4 ">
                <div className="nav-item active">
                  <p>Search</p>
                </div>
                <div className="nav-item">
                  {token && <p>{userInfo.email}</p>}
                </div>
                {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#!">
                      Action
                    </a>
                    <a className="dropdown-item" href="#!">
                      Another action
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#!">
                      Something else here
                    </a>
                  </div>
                </li> */}
              </div>
            </div>
          </div>
        </nav>
        {/* <!-- Page content--> */}
        <div className="vh-100">
          {token ? (
            <Outlet />
          ) : (
            <>
              <Navigate to="/login" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
