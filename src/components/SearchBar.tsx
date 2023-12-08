import { useState } from "react";
import { useCar } from "../context/cars/CarProvider";

interface FormState {
  driver: string;
  date: string;
  time: string;
  passenger: string;
}

function SearchBar() {
  const [form, setForm] = useState<FormState>({
    driver: "",
    date: "",
    time: "",
    passenger: "",
  });

  const { fetchCars, setUrlParams } = useCar();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { driver, date, time, passenger } = form;
    fetchCars({ driver, date, time, passenger, isPaginate: "false" });
    setUrlParams({ date, passenger, time });
  }

  function handleInput(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: keyof FormState
  ) {
    setForm({
      ...form,
      [field]: e.target.value,
    });
  }

  const parameter = new URLSearchParams(location.search);
  const date = parameter.get("date") || "";
  const capacity = parameter.get("capacity") || "";
  const time = parameter.get("time") || "";

  const dateValue = date || form.date;
  const capacityValue = capacity || form.passenger;
  const timeValue = time || "default";

  return (
    <section id="search" style={{ position: "relative" }}>
      <div className="container mt-3">
        <form action="" id="search-form" onSubmit={handleSubmit}>
          <div
            className="row row-cols-1 row-cols-sm-5 g-2 gx-sm-3 align-items-end  p-3 p-sm-4 rounded-2 shadow p-3 mb-5 bg-body rounded"
            style={{ marginTop: "-60px", zIndex: "1" }}
          >
            <div className="col">
              <label className="form-label">Tipe Driver</label>
              <select
                className="form-select mt-2"
                id="tipe-driver"
                onChange={(e) => handleInput(e, "driver")}
                defaultValue={"default"}
                required
              >
                <option disabled value="default" hidden>
                  Pilih Tipe Driver
                </option>
                <option value="1">Dengan Sopir</option>
                <option value="2">Tanpa Sopir (Lepas Kunci)</option>
              </select>
            </div>
            <div className="col">
              <label className="form-label">Tanggal</label>
              <input
                id="tanggal"
                className="form-control mt-2"
                type="date"
                name="tanggal"
                defaultValue={dateValue}
                onChange={(e) => handleInput(e, "date")}
                required
              />
            </div>
            <div className="col">
              <label className="form-label">Waktu Jemput/Ambil</label>
              <select
                className="form-select mt-2"
                id="waktuJemput"
                onChange={(e) => handleInput(e, "time")}
                defaultValue={timeValue}
                required
              >
                <option disabled value="default" hidden>
                  Waktu Jemput / Ambil
                </option>
                <option value="08:00">08.00 WIB</option>
                <option value="09:00">09.00 WIB</option>
                <option value="10:00">10.00 WIB</option>
                <option value="11:00">11.00 WIB</option>
                <option value="12:00">12.00 WIB</option>
              </select>
            </div>
            <div className="col">
              <label className="form-label">Jumlah Penumpang</label>
              <input
                type="number"
                className="form-control mt-2"
                id="penumpang"
                placeholder="4 Penumpang"
                defaultValue={capacityValue}
                onChange={(e) => handleInput(e, "passenger")}
                required
              />
            </div>
            <div className="col">
              <button
                className="btn btn-success w-100"
                type="submit"
                id="submit-button"
              >
                Cari Mobil
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SearchBar;
