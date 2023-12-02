function Footer() {
  return (
    <footer id="footer">
      <section className="footer-section py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="address me-5">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="navigation">
                <p className="item-navigation">Our Service</p>
                <p className="item-navigation">why Us</p>
                <p className="item-navigation">Testimonial</p>
                <p className="item-navigation">FAQ</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="sosmed">
                <p>Connect with us</p>
                <div className="d-flex align-items-center">
                  <i className="bi bi-facebook" id="icon-facebook"></i>
                  <i className="bi bi-instagram" id="icon-instagram"></i>
                  <i className="bi bi-twitter" id="icon-twitter"></i>
                  <i className="bi bi-envelope-at-fill" id="icon-email"></i>
                  <i className="bi bi-twitch" id="icon-twitch"></i>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="copyright me-5">
                <p className="fw-semibold">Copyright Binar 2023</p>
                <div className="logo-copyright"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
