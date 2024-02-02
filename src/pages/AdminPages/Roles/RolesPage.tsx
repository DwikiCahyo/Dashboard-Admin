import Sidebar from '../../../components/Admin/Sidebar';
import { useLocation } from 'react-router-dom';
import Breadcrumbs from '../../../components/Admin/Breadcrumbs';
import { useAuthStore } from '../../../store/authStore';
import { useUserStore } from '../../../store/userStore';
import { configHeadRole } from '../../../utils/utilsTable';
import { useEffect, useState } from 'react';
import ModalUpdateRole from '../../../components/Admin/ModalUpdateRole';
import { UserData } from '../../../types/types';

function RolesPage() {
  const token = useAuthStore((state) => state.token);
  const { fetchUser, users } = useUserStore();
  const [userInfo, setUserInfo] = useState<UserData>({
    email: '',
    roles: '',
    id: 0,
  });
  const { modal, setModal } = useUserStore();

  useEffect(() => {
    if (token) fetchUser(token);
    console.log('bla');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal]);

  function handleModal(user: UserData) {
    setModal(true);
    setUserInfo(user);
  }

  const renderedHeadersUsers = configHeadRole.map((column) => {
    return (
      <th scope="col" key={column.label}>
        {column.label}
      </th>
    );
  });

  const renderedRowsUser = users.map((user, index) => {
    return (
      <>
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{user.email}</td>
          <td>{user.roles}</td>
          <td>
            <button
              className="btn btn-warning text-light"
              onClick={() => handleModal(user)}
            >
              Update Role
            </button>
          </td>
        </tr>
      </>
    );
  });

  const location = useLocation()
    .pathname.split('/')
    .filter((name) => name !== '');

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar title="Roles" />
        <div className="col-12 col-md-10 bg-light min-vh-100  px-5 py-5">
          <div className="mt-3">
            <Breadcrumbs location={location} />
          </div>
          <h3 className="fw-semibold mt-4">Role Management</h3>
          <table className="table text-start">
            <thead>
              <tr className="table-primary">{renderedHeadersUsers}</tr>
            </thead>
            <tbody>{renderedRowsUser}</tbody>
          </table>
          <ModalUpdateRole
            show={modal}
            onHide={() => setModal(false)}
            user={userInfo}
          />
        </div>
      </div>
    </div>
  );
}

export default RolesPage;
