import assetComplete from '../assets/icon_1.svg';
import assetPrice from '../assets/icon_price.svg';
import assetProfesional from '../assets/icon_professional.svg';
import assetTime from '../assets/icon_24hrs.svg';

function Whyus() {
  return (
    <section className="why-us-section">
      <div className="container p-md-5">
        <div className="why-us-tagline">
          <h1 className="fw-bold">Why Us ?</h1>
          <p className="mt-3">Mengapa harus pilih Binar Car Rental?</p>
        </div>

        <div className="why-us-card">
          <div className="row py-4 d-flex align-items-center">
            <div className="col-sm-6 col-md-3">
              <div className="card-item">
                <img className="icon-card" src={assetComplete} alt="" />
                <h2 className="card-title">Mobil Lengkap</h2>
                <p className="card-desc">
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="card-item">
                <img className="icon-card" src={assetPrice} alt="" />
                <h2 className="card-title">Harga Murah</h2>
                <p className="card-desc">
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan
                  rental mobil lain
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="card-item">
                <img className="icon-card" src={assetTime} alt="" />
                <h2 className="card-title">Layanan 24 Jam</h2>
                <p className="card-desc">
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                  tersedia di akhir minggu
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="card-item">
                <img className="icon-card" src={assetProfesional} alt="" />
                <h2 className="card-title">Sopir Profesional</h2>
                <p className="card-desc">
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                  tepat waktu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Whyus;
