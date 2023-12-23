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

function AdminPages() {
  const { cars, fetchCars, page, pagesTotal, pageSize } = useCarStore();

  useEffect(() => {
    fetchCars({ page: page, pageSize: pageSize });
  }, [page, pageSize]);

  const location = useLocation()
    .pathname.split('/')
    .filter((name) => name !== '');

  const configHeadCars = [
    { label: 'No' },
    { label: 'Name' },
    { label: 'Type' },
    { label: 'Price' },
    { label: 'Date Available' },
    { label: 'Time Available' },
    { label: 'Capacity' },
    { label: 'Updated by' },
  ];

  const renderedHeaders = configHeadCars.map((column) => {
    return (
      <th scope="col" key={column.label}>
        {column.label}
      </th>
    );
  });

  const renderedRows = cars.map((car, index) => {
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
            <Subtitle subtitle="List Cars" />
            <PageCount page={page} totalPage={pagesTotal} />
          </div>
          <div className="mt-4" id="table-car">
            <table className="table text-center">
              <thead>
                <tr className="table-primary">{renderedHeaders}</tr>
              </thead>
              <tbody>{renderedRows}</tbody>
            </table>
            <div className="d-flex align-items-center justify-content-between mt-4">
              <div className="d-inline-flex gap-3 ">
                <LimitPage />
                <JumpPage totalPage={pagesTotal} />
              </div>
              <PaginationAdmin page={page} totalPages={pagesTotal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPages;
