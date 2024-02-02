import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { UserData } from '../../types/types';
import { useAuthStore } from '../../store/authStore';
import { apiInstance } from '../../utils/utils';
import { AxiosError } from 'axios';
import { useUserStore } from '../../store/userStore';

interface ModalUpdateRole {
  show: boolean;
  onHide: () => void;
  user: UserData;
}

export default function ModalUpdateRole(props: ModalUpdateRole) {
  const { user } = props;
  const [role, setRole] = useState(0);
  const { token } = useAuthStore();
  const { setModal } = useUserStore();

  function handleChangeRole(role: string) {
    console.log(role);

    switch (role) {
      case 'superadmin':
        setRole(1);
        break;
      case 'admin':
        setRole(2);
        break;
      case 'user':
        setRole(3);
        break;
      default:
        break;
    }
  }

  async function handleSubmit() {
    try {
      const response = await apiInstance.patch(
        `users/${user.id}`,
        { role_id: role },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (response.status === 200) {
        setModal(false);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data.message);
      }
    }
  }

  return (
    <Modal
      onHide={props.onHide}
      show={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={user.email} disabled />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Role</Form.Label>
            <select
              className="form-select"
              defaultValue={user.roles}
              onChange={(e) => handleChangeRole(e.target.value)}
            >
              <option value="superadmin">Superadmin</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="light">
          Close
        </Button>
        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleSubmit}
        >
          Save Changes
        </button>
      </Modal.Footer>
    </Modal>
  );
}
