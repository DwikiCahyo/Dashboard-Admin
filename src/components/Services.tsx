import assetWoman from '../assets/img_service.svg';

function Services() {
  return (
    <section className="our-section" id="our-service">
      <div className="container p-md-5">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-5 py-5">
            <img
              src={assetWoman}
              alt="women"
              id="img-woman"
              className="w-100"
            />
          </div>
          <div className="col-md-7 py-5">
            <div className="content-our-section">
              <h1 className="fw-bold">
                Best Car Rental for any kind of trip in Surabaya!
              </h1>
              <p className="mt-3">
                Sewa mobil di Surabaya bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <ul className="list-our" style={{ padding: '0' }}>
                <li className="item-list">
                  Sewa Mobil Dengan Supir di Bali 12 Jam
                </li>
                <li className="item-list">
                  Sewa Mobil Lepas Kunci di Bali 24 Jam
                </li>
                <li className="item-list">Sewa Mobil Jangka Panjang Bulanan</li>
                <li className="item-list">
                  Gratis Antar - Jemput Mobil di Bandara
                </li>
                <li className="item-list">
                  Layanan Airport Transfer / Drop In Out
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
