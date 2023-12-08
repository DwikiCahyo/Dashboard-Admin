import { Form } from "react-bootstrap";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useAuthStore } from "../../store/authStore";
import { ResponseUser, User } from "../../types/types";
import { getRoleJwt } from "../../utils/utils";

function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setToken = useAuthStore((state) => state.setToken);
  const setSuccess = useAuthStore((state) => state.setSuccess);
  const setError = useAuthStore((state) => state.setError);
  const setUserInfo = useAuthStore((state) => state.setUserInfo);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await axios.post<ResponseUser>(
        "http://localhost:3000/login",
        {
          email,
          password,
        }
      );
      const role = getRoleJwt(response.data.data.token);
      const user: User = {
        email: response.data.data.email,
        id: response.data.data.id,
        role_id: role.role_id,
      };
      setUserInfo(user);

      setToken(response.data.data.token);
      setSuccess();
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data.message);
        setError(error.response?.data.message);
      }
    }
  }

  return (
    <div style={{ marginTop: "32px" }}>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <button
          className="btn btn-primary w-100"
          type="submit"
          id="submit-button"
        >
          Sign in
        </button>
      </Form>
    </div>
  );
}

export default FormLogin;
