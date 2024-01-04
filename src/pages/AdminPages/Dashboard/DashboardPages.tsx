import './style.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../../../components/Admin/Sidebar';
import Breadcrumbs from '../../../components/Admin/Breadcrumbs';
import Subtitle from '../../../components/Admin/Subtitle';
import { useCarStore } from '../../../store/carStore';
import { convertDate, convertTime, formatToIDR } from '../../../utils/utils';
import PageCount from '../../../components/Admin/PageCount';
import JumpPage from '../../../components/Admin/JumpPage';
import PaginationAdmin from '../../../components/Admin/PaginantionAdmin';
import LimitPage from '../../../components/Admin/LimitPage';
import { configHeadCars, configHeadUser } from '../../../utils/utilsTable';
import { useAuthStore } from '../../../store/authStore';
import { useUserStore } from '../../../store/userStore';

function AdminPages() {
  const { cars, fetchCars, page, pagesTotal, pageSize } = useCarStore();
  const token = useAuthStore((state) => state.token);
  const { fetchUser, users } = useUserStore();

  useEffect(() => {
    fetchCars({ page: page, pageSize: pageSize });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, pageSize]);

  useEffect(() => {
    if (token) fetchUser(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const location = useLocation()
    .pathname.split('/')
    .filter((name) => name !== '');

  const renderedHeadersCars = configHeadCars.map((column) => {
    return (
      <th scope="col" key={column.label}>
        {column.label}
      </th>
    );
  });

  const renderedHeadersUsers = configHeadUser.map((column) => {
    return (
      <th scope="col" key={column.label}>
        {column.label}
      </th>
    );
  });

  const renderedRowsCars = cars.map((car, index) => {
    return (
      <tr key={car.id}>
        <th scope="row">{index + 1}</th>
        <td>{car.plate}</td>
        <td>{car.type}</td>
        <td>{formatToIDR(car.rentPerDay)}</td>
        <td>{convertDate(car.availableAt)}</td>
        <td>{convertTime(car.availableAt)}</td>
        <td>{car.capacity} people</td>
        <td>{car.updated_by ? car.updated_by : 'Not Updated'}</td>
      </tr>
    );
  });

  const renderedRowsUser = users.map((user) => {
    return (
      <tr key={user.id}>
        <th scope="row">{user.id}</th>
        <td>{user.email}</td>
        <td>{user.roles}</td>
      </tr>
    );
  });

  return (
    <div className="container-fluid ">
      <div className="row">
        <Sidebar title="Dashboard" />
        <div className="col-12 col-md-10 bg-light min-vh-100  px-5 py-5">
          <div className="mt-3">
            <Breadcrumbs location={location} />
          </div>
          <h3 className="fw-semibold mt-4">Dashboard</h3>
          <div className="d-flex align-items-end justify-content-between mt-4">
            <Subtitle subtitle="List Car" />
            <PageCount page={page} totalPage={pagesTotal} />
          </div>
          <div className="mt-4" id="table-car">
            <table className="table text-center">
              <thead>
                <tr className="table-primary">{renderedHeadersCars}</tr>
              </thead>
              <tbody>{renderedRowsCars}</tbody>
            </table>
            <div className="d-flex align-items-center justify-content-between mt-4">
              <div className="d-inline-flex gap-3 ">
                <LimitPage />
                <JumpPage totalPage={pagesTotal} />
              </div>
              <PaginationAdmin page={page} totalPages={pagesTotal} />
            </div>
          </div>
          <div className="d-flex align-items-end justify-content-between mt-4">
            <Subtitle subtitle="List User" />
          </div>
          <div className="mt-4" id="table-car">
            <table className="table text-start">
              <thead>
                <tr className="table-primary">{renderedHeadersUsers}</tr>
              </thead>
              <tbody>{renderedRowsUser}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPages;
