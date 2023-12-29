import { Alert, Form } from 'react-bootstrap';
import { useState } from 'react';
import { AxiosError } from 'axios';
import { useAuthStore } from '../../store/authStore';
import { ResponseUser, User } from '../../types/types';
import { apiInstance, getRoleJwt } from '../../utils/utils';

function FormLogin() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const [password, setPassword] = useState('');
  const { setToken, setSuccess, setError, setLogin, setUserInfo } =
    useAuthStore();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await apiInstance.post<ResponseUser>('login', {
        email,
        password,
      });
      setIsLoading(true);
      if (response.status === 200) {
        setIsLoading(false);
        const role = getRoleJwt(response.data.data.token);
        const user: User = {
          email: response.data.data.email,
          id: response.data.data.id,
          role_id: role.role_id,
        };
        setUserInfo(user);

        setToken(response.data.data.token);
        setLogin();
        setSuccess(true);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data.message);
        setError(error.response?.data.message);
      }
    }
  }

  return (
    <div style={{ marginTop: '32px' }}>
      {isLoading && <Alert variant="light">Loading...</Alert>}
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
