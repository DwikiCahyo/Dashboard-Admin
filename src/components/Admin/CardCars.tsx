import { Car } from "../../types/types";
import { convertDate, convertTime, formatToIDR } from "../../utils/utils";
import assetKey from "../../assets/fi_key.svg";
import assetClock from "../../assets/fi_clock.svg";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useCarStore } from "../../store/carStore";
import { useAuthStore } from "../../store/authStore";

interface CardCarsProps {
  cars: Car;
}

function CardCars({ cars }: CardCarsProps) {
  const deleteCar = useCarStore((state) => state.deleteCars);
  const token = useAuthStore((state) => state.token) || "";
  const setSuccessDelete = useCarStore((state) => state.setSuccessDelete);

  function handleDelete() {
    Swal.fire({
      title: "Menghapus Data Mobil",
      text: "Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0D28A6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCar(cars.id, token);
        setSuccessDelete(true);

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            setSuccessDelete(false);
          }
        });
      }
    });
  }

  return (
    <div className="card " style={{ minHeight: "500px", objectFit: "contain" }}>
      <img src={cars.image} className="card-img-top" width={300} height={300} />
      <div className="card-body">
        <p className="card-text">
          {cars.plate} / {cars.type}
        </p>
        <h5 className="card-title">{formatToIDR(cars.rentPerDay)}</h5>
        <div className="d-flex gap-2 mt-4">
          <img src={assetKey} alt="icon-key" width={20} height={20} />
          <p className="card-text">
            {convertDate(cars.availableAt)} - {convertTime(cars.availableAt)}
          </p>
        </div>
        <div className="d-flex gap-2 mt-4">
          <img src={assetClock} alt="icon-key" width={20} height={20} />
          <p className="card-text">
            {cars.updated_by ? (
              <p>Updated by : {cars.updated_by}</p>
            ) : (
              <p style={{ color: "red" }}> Not Updated</p>
            )}
          </p>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-md-6">
            <div
              className="btn btn-outline-danger"
              style={{ width: "100%", padding: "10px" }}
              onClick={handleDelete}
            >
              Delete
            </div>
          </div>
          <div className="col-12 col-md-6">
            <Link
              to={cars.id.toString()}
              className="btn btn-success"
              style={{ width: "100%", padding: "10px" }}
            >
              Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCars;
