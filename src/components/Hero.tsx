import car from "../assets/car.svg";

function Hero() {
  return (
    <section className="main-section">
      <div className="container pt-md-5 pt-sm-3">
        <div className="row align-items-center">
          <div className="col-md-6 py-5">
            <h1 className="fw-bold">
              Sewa & Rental Mobil Terbaik di kawasan Surabaya
            </h1>
            <p className="mt-4">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <a className="btn btn-success mt-4" href="/search">
              Mulai Sewa Mobil
            </a>
          </div>
          <div
            className="col-md-6 py-5 d-flex align-items-center justify-content-start"
            id="car-img"
          >
            <div className="bg-car"></div>
            <img src={car} className="w-100" alt="car" id="img-car" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
