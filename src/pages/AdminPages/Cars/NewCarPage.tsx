import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../../components/Admin/Breadcrumbs";
import CloudinaryUpload from "../../../components/Admin/CloudinaryUpload";
import { Form } from "react-bootstrap";
import { useCarStore } from "../../../store/carStore";
import { useEffect } from "react";

function NewCar() {
  const location = useLocation()
    .pathname.split("/")
    .filter((name) => name !== "");
  const imageUrl = useCarStore((state) => state.imageUrl);

  useEffect(() => {
    if (imageUrl) {
      console.log(imageUrl);
    }
  }, [imageUrl]);
  return (
    <div className="mt-3">
      <Breadcrumbs location={location} />
      <div
        className=" bg-white mt-4"
        style={{ width: "100%", padding: "50px 50% 50px 50px" }}
      >
        <Form>
          <Form.Group
            className="mb-3 d-flex align-items-center"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label style={{ width: "200px", marginTop: "16px" }}>
              Plate
            </Form.Label>
            <Form.Control type="text" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex align-items-center"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label style={{ width: "200px", marginTop: "16px" }}>
              Manufacture
            </Form.Label>
            <Form.Control type="text" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex align-items-center"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label style={{ width: "200px", marginTop: "16px" }}>
              Model
            </Form.Label>
            <Form.Control type="text" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group
            controlId="formFile"
            className="mb-3 d-flex align-items-center"
          >
            <Form.Label style={{ width: "150px", marginTop: "16px" }}>
              Image
            </Form.Label>
            <CloudinaryUpload />
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex align-items-center"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label style={{ width: "200px", marginTop: "16px" }}>
              Rent Per Day
            </Form.Label>
            <Form.Control type="text" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex align-items-center"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label style={{ width: "200px", marginTop: "16px" }}>
              Capacity
            </Form.Label>
            <Form.Control type="text" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex align-items-center"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label style={{ width: "200px", marginTop: "16px" }}>
              Description
            </Form.Label>
            <Form.Control type="text" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex align-items-center"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label style={{ width: "200px", marginTop: "16px" }}>
              Available At
            </Form.Label>
            <Form.Control type="text" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex align-items-center"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label style={{ width: "200px", marginTop: "16px" }}>
              Transmission
            </Form.Label>
            <Form.Control type="text" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex align-items-center"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label style={{ width: "200px", marginTop: "16px" }}>
              Available
            </Form.Label>
            <Form.Control type="text" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex align-items-center"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label style={{ width: "200px", marginTop: "16px" }}>
              Type
            </Form.Label>
            <Form.Control type="text" placeholder="name@example.com" />
          </Form.Group>
        </Form>
        <Form.Group
          className="mb-3 d-flex align-items-center"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label style={{ width: "200px", marginTop: "16px" }}>
            Year
          </Form.Label>
          <Form.Control type="text" placeholder="name@example.com" />
        </Form.Group>
      </div>
    </div>
  );
}

export default NewCar;
