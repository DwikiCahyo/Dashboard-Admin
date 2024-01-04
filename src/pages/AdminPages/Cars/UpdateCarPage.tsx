import Breadcrumbs from '../../../components/Admin/Breadcrumbs';
import { useLocation, Link, useParams, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { useCarStore } from '../../../store/carStore';
import { useEffect, useState } from 'react';
import { useAuthStore } from '../../../store/authStore';
import { AxiosError } from 'axios';
import { Alert } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { apiInstance } from '../../../utils/utils';

interface UpdateCarState {
  plate: string;
  manufacture: string;
  model: string;
  rentPerDay: number;
  capacity: number;
  description: string;
  transmission: string;
  available: boolean;
  type: string;
  year: number;
  options: string;
  specs: string;
}

function UpdateCarPage() {
  const location = useLocation()
    .pathname.split('/')
    .filter((name) => name !== '');
  const token = useAuthStore((state) => state.token);
  const car = useCarStore((state) => state.car);
  const fetchCar = useCarStore((state) => state.fetchCar);
  const [isLoading, setLoading] = useState<boolean | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState<UpdateCarState>({
    plate: '',
    manufacture: '',
    model: '',
    rentPerDay: 0,
    capacity: 0,
    description: '',
    transmission: '',
    available: true,
    type: '',
    year: 0,
    options: '',
    specs: '',
  });

  function handleInput(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    field: keyof UpdateCarState,
  ) {
    setForm({
      ...form,
      [field]: e.target.value,
    });
  }

  useEffect(() => {
    if (token) {
      fetchCar(id, token);
    }
  }, [id, token]);

  useEffect(() => {
    if (car) {
      setForm({
        plate: car.plate,
        manufacture: car.manufacture,
        model: car.model,
        rentPerDay: car.rentPerDay,
        capacity: car.capacity,
        description: car.description,
        transmission: car.transmission,
        available: car.available,
        type: car.type,
        year: car.year,
        options: car.options,
        specs: car.specs,
      });
    }
  }, [car]);

  console.log(car);

  console.log(form.transmission);

  useEffect(() => {
    if (!isLoading && isLoading !== null) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          navigate('/admin/cars');
        },
      });
      Toast.fire({
        icon: 'success',
        title: `Success update car with id ${id} `,
      });
    }
  }, [isLoading]);

  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const {
      plate,
      manufacture,
      model,
      rentPerDay,
      capacity,
      description,
      transmission,
      available,
      type,
      year,
      options,
      specs,
    } = form;
    try {
      const response = await apiInstance.patch(
        `cars/${id} `,
        {
          plate: plate,
          manufacture: manufacture,
          model: model,
          rentPerDay: rentPerDay,
          capacity: capacity,
          description: description,
          availableAt: car?.availableAt,
          transmission: transmission,
          available: available,
          type: type,
          year: year,
          options: options,
          specs: specs,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      console.log(response.status);

      if (response.status === 200) {
        setLoading(false);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data.message);
      }
    }
  }

  return (
    <div className="mt-3">
      <Breadcrumbs location={location} />
      <h3 className="fw-bold mt-4">Update Car</h3>
      <div
        className=" bg-white mt-4"
        style={{ width: '100%', padding: '50px 20px ' }}
      >
        <div className="row align-items-start">
          <div className=" col-6 col-md-5 d-flex flex-column align-items-center">
            <img
              src={car?.image}
              alt=""
              width={400}
              height={400}
              className="mt-4 rounded-2"
            />
            <p className="fst-italic mt-2">{car?.plate}</p>
          </div>
          <div className="col-6 col-md-5 col-7 mt-4 w-90">
            <Form onSubmit={handleUpdate} validated>
              <Form.Group className="mb-3 d-flex align-items-center">
                <Form.Label style={{ width: '200px', marginTop: '16px' }}>
                  Plate
                </Form.Label>
                <input
                  type="text"
                  placeholder="Plate"
                  className="form-control mt-2"
                  value={form.plate}
                  onChange={(e) => handleInput(e, 'plate')}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 d-flex align-items-center">
                <Form.Label style={{ width: '200px', marginTop: '16px' }}>
                  Manufacture
                </Form.Label>
                <input
                  className="form-control mt-2"
                  type="text"
                  placeholder="Manufacture"
                  value={form.manufacture}
                  onChange={(e) => handleInput(e, 'manufacture')}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 d-flex align-items-center">
                <Form.Label style={{ width: '200px', marginTop: '16px' }}>
                  Model
                </Form.Label>
                <input
                  className="form-control mt-2"
                  type="text"
                  placeholder="Model"
                  value={form.model}
                  onChange={(e) => handleInput(e, 'model')}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 d-flex align-items-center">
                <Form.Label style={{ width: '200px', marginTop: '16px' }}>
                  Rent Per Day
                </Form.Label>
                <input
                  className="form-control mt-2"
                  type="number"
                  placeholder="rent per day"
                  value={form.rentPerDay}
                  onChange={(e) => handleInput(e, 'rentPerDay')}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 d-flex align-items-center">
                <Form.Label style={{ width: '200px', marginTop: '16px' }}>
                  Capacity
                </Form.Label>
                <input
                  className="form-control mt-2"
                  type="number"
                  placeholder="capacity"
                  value={form.capacity}
                  onChange={(e) => handleInput(e, 'capacity')}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 d-flex align-items-center">
                <Form.Label style={{ width: '200px', marginTop: '16px' }}>
                  Description
                </Form.Label>
                <textarea
                  className="form-control mt-2"
                  placeholder="Description"
                  value={form.description}
                  onChange={(e) => handleInput(e, 'description')}
                  required
                />
              </Form.Group>
              {/* <Form.Group className="mb-3 d-flex align-items-center">
                <Form.Label style={{ width: "200px", marginTop: "16px" }}>
                  Available At
                </Form.Label>
                <input
                  className="form-control mt-2"
                  type="tex"
                  placeholder="Available at"
                  value={convertDate(form.availableAt)}
                  required
                />
              </Form.Group> */}
              <Form.Group className="mb-3 d-flex align-items-center">
                <Form.Label style={{ width: '200px', marginTop: '16px' }}>
                  Transmission
                </Form.Label>
                <select
                  className="form-select mt-2"
                  id="Available"
                  value={form.transmission}
                  onChange={(e) => handleInput(e, 'transmission')}
                  required
                >
                  <option disabled value="default" hidden>
                    Transmission
                  </option>
                  <option value="Automatic">Automatic</option>
                  <option value="Manual">Manual</option>
                  <option value="CVT">CVT</option>
                  <option value="Automanual">Automanual</option>
                </select>
              </Form.Group>
              <Form.Group className="mb-3 d-flex align-items-center">
                <Form.Label style={{ width: '200px', marginTop: '16px' }}>
                  Available
                </Form.Label>
                <select
                  className="form-select mt-2"
                  id="Available"
                  value={form.available ? 'true' : 'false'}
                  onChange={(e) => handleInput(e, 'available')}
                  required
                >
                  <option disabled value="default" hidden>
                    Available
                  </option>
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </Form.Group>
              <Form.Group className="mb-3 d-flex align-items-center">
                <Form.Label style={{ width: '200px', marginTop: '16px' }}>
                  Type
                </Form.Label>
                <input
                  className="form-control mt-2"
                  type="text"
                  placeholder="Type"
                  value={form.type}
                  onChange={(e) => handleInput(e, 'type')}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 d-flex align-items-center">
                <Form.Label style={{ width: '200px', marginTop: '16px' }}>
                  Year
                </Form.Label>
                <input
                  className="form-control mt-2"
                  type="number"
                  placeholder="Year"
                  value={form.year}
                  onChange={(e) => handleInput(e, 'year')}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 d-flex align-items-center">
                <Form.Label style={{ width: '200px', marginTop: '16px' }}>
                  Options
                </Form.Label>
                <textarea
                  className="form-control mt-2"
                  placeholder="Options"
                  value={form.options}
                  onChange={(e) => handleInput(e, 'options')}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 d-flex align-items-center">
                <Form.Label style={{ width: '200px', marginTop: '16px' }}>
                  Specs
                </Form.Label>
                <textarea
                  className="form-control mt-2"
                  placeholder="Specs"
                  value={form.specs}
                  onChange={(e) => handleInput(e, 'specs')}
                  required
                />
              </Form.Group>
              <Link to="/admin/cars" className="btn btn-secondary mt-4">
                Cancel
              </Link>

              <button
                className="btn btn-primary ms-4 mt-4"
                style={{ width: 100 }}
                type="submit"
              >
                Save
              </button>
              {isLoading && (
                <Alert key="info" variant="info" className="mt-3">
                  Uploading car data....
                </Alert>
              )}
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateCarPage;
