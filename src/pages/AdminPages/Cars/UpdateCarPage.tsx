import Breadcrumbs from "../../../components/Admin/Breadcrumbs";
import { useLocation, NavLink } from "react-router-dom";
import { Form } from "react-bootstrap";

function UpdateCarPage() {
  const location = useLocation()
    .pathname.split("/")
    .filter((name) => name !== "");

  return (
    <div className="mt-3">
      <Breadcrumbs location={location} />
      <h3 className="fw-bold mt-4">Update Car</h3>
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
            <Form.Label style={{ width: "200px", marginTop: "16px" }}>
              Image
            </Form.Label>
            <Form.Control type="file" />
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
      <div>
        <NavLink to="/admin/cars" className="btn btn-outline-primary">
          Cancel
        </NavLink>
        <button className="btn btn-primary">Save</button>
      </div>
    </div>
  );
}

export default UpdateCarPage;
