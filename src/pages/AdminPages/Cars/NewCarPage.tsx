import { Link, useLocation, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../components/Admin/Breadcrumbs";
import { Form, Alert } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { ResponsePostCar } from "../../../types/types";
import { useAuthStore } from "../../../store/authStore";
import { useCarStore } from "../../../store/carStore";
import Swal from "sweetalert2";

interface NewCarState {
  plate: string;
  manufacture: string;
  model: string;
  rentPerDay: number;
  capacity: number;
  description: string;
  availableAt: string;
  transmission: string;
  available: boolean;
  type: string;
  year: number;
  options: string;
  specs: string;
}

function NewCar() {
  const location = useLocation()
    .pathname.split("/")
    .filter((name) => name !== "");
  const token = useAuthStore((state) => state.token);
  const [file, setFile] = useState<File | undefined>();
  const [isLoading, setLoading] = useState<boolean | null>(null);
  const setSuccessPost = useCarStore((state) => state.setSuccessPost);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isLoading !== null) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          navigate("/admin/cars");
        },
      });
      Toast.fire({
        icon: "success",
        title: "Success add new car",
      });
    }
  }, [isLoading]);

  const [form, setForm] = useState<NewCarState>({
    plate: "",
    manufacture: "",
    model: "",
    rentPerDay: 0,
    capacity: 0,
    description: "",
    availableAt: "",
    transmission: "",
    available: true,
    type: "",
    year: 0,
    options: "",
    specs: "",
  });

  function handleInput(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    field: keyof NewCarState
  ) {
    setForm({
      ...form,
      [field]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Clicked");
    setLoading(true);
    const {
      plate,
      manufacture,
      model,
      rentPerDay,
      capacity,
      description,
      availableAt,
      transmission,
      available,
      type,
      year,
      options,
      specs,
    } = form;
    console.log(form);

    try {
      const response = await axios.post<ResponsePostCar>(
        "http://localhost:3000/cars",
        {
          plate: plate,
          manufacture: manufacture,
          model: model,
          image: file,
          rentPerDay: rentPerDay,
          capacity: capacity,
          description: description,
          availableAt: availableAt,
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
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);

      if (response.status === 200) {
        setLoading(false);
        setSuccessPost(true);
        const navigate = useNavigate();
        navigate("/admin/cars");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data.message);
      }
    }
  }

  function handleOnImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setFile(file);
  }

  return (
    <div className="mt-3">
      <Breadcrumbs location={location} />
      <h3 className="fw-bold mt-4">Add New Car</h3>
      <div
        className=" bg-white mt-4"
        style={{ width: "100%", padding: "50px 50% 50px 50px" }}
      >
        <Form onSubmit={handleSubmit} validated>
          <Form.Group className="mb-3 d-flex align-items-center">
            <Form.Label style={{ width: "200px", marginTop: "16px" }}>
              Plate
            </Form.Label>
            <input
              type="text"
              placeholder="Plate"
              className="form-control mt-2"
              onChange={(e) => handleInput(e, "plate")}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-center">
            <Form.Label style={{ width: "200px", marginTop: "16px" }}>
              Manufacture
            </Form.Label>
            <input
              className="form-control mt-2"
              type="text"
              placeholder="Manufacture"
              onChange={(e) => handleInput(e, "manufacture")}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-center">
            <Form.Label style={{ width: "200px", marginTop: "16px" }}>
              Model
            </Form.Label>
            <input
              className="form-control mt-2"
              type="text"
              placeholder="Model"
              onChange={(e) => handleInput(e, "model")}
              required
            />
          </Form.Group>
          <Form.Group
            controlId="formFile"
            className="mb-3 d-flex align-items-center"
          >
            <Form.Label style={{ width: "200px", marginTop: "16px" }}>
              Image
            </Form.Label>
            <input
              className="form-control mt-2"
              type="file"
              accept="image/*"
              onChange={handleOnImage}
            />
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-center">
            <Form.Label style={{ width: "200px", marginTop: "16px" }}>
              Rent Per Day
            </Form.Label>
            <input
              className="form-control mt-2"
              type="number"
              placeholder="rent per day"
              onChange={(e) => handleInput(e, "rentPerDay")}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-center">
            <Form.Label style={{ width: "200px", marginTop: "16px" }}>
              Capacity
            </Form.Label>
            <input
              className="form-control mt-2"
              type="number"
              placeholder="capacity"
              onChange={(e) => handleInput(e, "capacity")}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-center">
            <Form.Label style={{ width: "200px", marginTop: "16px" }}>
              Description
            </Form.Label>
            <textarea
              className="form-control mt-2"
              placeholder="Description"
              onChange={(e) => handleInput(e, "description")}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-center">
            <Form.Label style={{ width: "200px", marginTop: "16px" }}>
              Available At
            </Form.Label>
            <input
              className="form-control mt-2"
              type="text"
              placeholder="Available at"
              onChange={(e) => handleInput(e, "availableAt")}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-center">
            <Form.Label style={{ width: "200px", marginTop: "16px" }}>
              Transmission
            </Form.Label>
            <select
              className="form-select mt-2"
              id="Available"
              onChange={(e) => handleInput(e, "transmission")}
              required
            >
              <option disabled value="default" hidden>
                Transmission
              </option>
              <option value="automatic">Automatic</option>
              <option value="false">Manual</option>
              <option value="false">CVT</option>
              <option value="false">Automanual</option>
            </select>
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-center">
            <Form.Label style={{ width: "200px", marginTop: "16px" }}>
              Available
            </Form.Label>
            <select
              className="form-select mt-2"
              id="Available"
              onChange={(e) => handleInput(e, "available")}
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
            <Form.Label style={{ width: "200px", marginTop: "16px" }}>
              Type
            </Form.Label>
            <input
              className="form-control mt-2"
              type="text"
              placeholder="Type"
              onChange={(e) => handleInput(e, "type")}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-center">
            <Form.Label style={{ width: "200px", marginTop: "16px" }}>
              Year
            </Form.Label>
            <input
              className="form-control mt-2"
              type="number"
              placeholder="Year"
              onChange={(e) => handleInput(e, "year")}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-center">
            <Form.Label style={{ width: "200px", marginTop: "16px" }}>
              Options
            </Form.Label>
            <input
              className="form-control mt-2"
              type="text"
              placeholder="Options"
              onChange={(e) => handleInput(e, "options")}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-center">
            <Form.Label style={{ width: "200px", marginTop: "16px" }}>
              Specs
            </Form.Label>
            <input
              className="form-control mt-2"
              type="text"
              placeholder="Specs"
              onChange={(e) => handleInput(e, "specs")}
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
        </Form>
        {isLoading && (
          <Alert key="info" variant="info" className="mt-3">
            Uploading car data....
          </Alert>
        )}
      </div>
    </div>
  );
}

export default NewCar;
