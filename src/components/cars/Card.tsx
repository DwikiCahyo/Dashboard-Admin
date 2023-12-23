import { useCar } from '../../context/cars/CarProvider';
import assetCalendar from '../../assets/fi_calendar.svg';
import assetSetting from '../../assets/fi_settings.svg';
import assetUser from '../../assets/fi_users.svg';

function Card() {
  const { cars } = useCar();

  return (
    <>
      {cars.length > 0 ? (
        cars.map((car) => (
          <div className="col" key={car.id}>
            <div className="col">
              <div className="card" style={{ minHeight: '500px' }}>
                <img
                  src={car.image}
                  alt={car.plate}
                  className="card-img-top"
                  width="100px"
                  height="200px"
                />
                <div className="card-body">
                  <p className="card-text">{car.plate}</p>
                  <h5 className="card-title mt-3">{car.rentPerDay} / hari</h5>
                  <p>{car.description}</p>
                  <div className="d-flex">
                    <img src={assetUser} width="20px" height="20px" />
                    <p className="ms-2">{car.capacity}</p>
                  </div>
                  <div className="d-flex">
                    <img src={assetSetting} width="20px" height="20px" />
                    <p className="ms-2">{car.transmission}</p>
                  </div>
                  <div className="d-flex">
                    <img src={assetCalendar} width="20px" height="20px" />
                    <p className="ms-2">{car.year}</p>
                  </div>
                  <button className="btn btn-success w-100">Pilih Mobil</button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Tidak ada hasil</p>
      )}
    </>
  );
}

export default Card;
