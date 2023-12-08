import LandingPages from "./pages/LandingPages/LandingPages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SearchPage from "./pages/SearchPages/SearchPage";
import AdminLayout from "./layout/AdminLayout";
import DashboardPages from "./pages/AdminPages/Dashboard/DashboardPages";
import CarLayout from "./layout/CarsLayout";
import ListCarPage from "./pages/AdminPages/Cars/ListCarPage";
import NewCar from "./pages/AdminPages/Cars/NewCarPage";
import UpdateCarPage from "./pages/AdminPages/Cars/UpdateCarPage";
import LoginPage from "./pages/AdminPages/Login/LoginPage";

const router = createBrowserRouter([
  { path: "/", element: <LandingPages /> },
  { path: "search", element: <SearchPage /> },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <DashboardPages />,
      },
      {
        path: "cars",
        element: <CarLayout />,
        children: [
          {
            index: true,
            element: <ListCarPage />,
          },
          {
            path: "newcar",
            element: <NewCar />,
          },
          {
            path: ":id",
            element: <UpdateCarPage />,
          },
        ],
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
