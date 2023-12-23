function Navbar() {
  return (
    <header id="header">
      {/* <!-- navbar section --> */}
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            {' '}
            Rent Car
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <!-- offcanvas sidebar --> */}
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="fw-bold">Rent Car</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item mt-2">
                  <a className="nav-link" href="#">
                    Our Service
                  </a>
                </li>
                <li className="nav-item mt-2">
                  <a className="nav-link" href="#">
                    Why Us
                  </a>
                </li>
                <li className="nav-item mt-2">
                  <a className="nav-link" href="#">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item mt-2">
                  <a className="nav-link" href="#">
                    FAQ
                  </a>
                </li>
                <li className="nav-item mt-2">
                  <button className="btn btn-success">Register</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
