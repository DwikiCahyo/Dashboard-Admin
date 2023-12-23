/* eslint-disable react-hooks/exhaustive-deps */
import { NavLink, Navigate, Outlet, useNavigate } from 'react-router-dom';
import './styles.css';
import { useAuthStore } from '../store/authStore';
import { useEffect } from 'react';
import { User } from '../types/types';
import { getRoleJwt } from '../utils/utils';

function AdminLayout() {
  const token = useAuthStore((state) => state.token);
  const userInfo = useAuthStore((state) => state.userInfo);
  const setUserInfo = useAuthStore((state) => state.setUserInfo);
  const removeToken = useAuthStore((state) => state.removeToken);
  const navigate = useNavigate();
  const isSuccess = useAuthStore((state) => state.isSuccess);
  const setSuccess = useAuthStore((state) => state.setSuccess);
  let payload;

  console.log(isSuccess);

  if (token !== null) {
    payload = getRoleJwt(token);
  }

  const user: User = {
    email: payload?.email || '',
    id: payload?.id || 0,
    role_id: payload?.role_id || 1,
  };

  useEffect(() => {
    if (userInfo.email === '') {
      setUserInfo(user);
    }
  }, [token]);

  function handleLogout() {
    localStorage.removeItem('user');
    setSuccess(false);
    removeToken();
    navigate('/login');
  }

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
            <div className="d-flex flex-column align-items-center p-3">
              <p className="fw-bold">Dashboard</p>
            </div>
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action "
            to="cars"
          >
            <div className="d-flex flex-column align-items-center p-3">
              <p className="fw-bold">Cars</p>
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
                <div className="nav-item">
                  {token && (
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {userInfo.email}
                      </button>
                      <ul className="dropdown-menu">
                        <button
                          className="dropdown-item"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </ul>
                    </div>
                  )}
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
          {token ? <Outlet /> : <Navigate to="/login" />}
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
