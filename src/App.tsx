import LandingPages from "./pages/LandingPages/LandingPages";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPages/SearchPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPages />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}

export default App;
