import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import "./styles.css";
import Card from "../../components/cars/Card";
import { CarProvider } from "../../context/cars/CarProvider";
import ListTitle from "../../components/cars/ListTitle";
import PaginationComponent from "../../components/cars/PaginationComponent";

function SearchPage() {
  return (
    <>
      <CarProvider>
        <Navbar />
        <main id="main">
          <Hero hidden={true} />
          <SearchBar />
          <section id="result" className="py-5">
            <div className="container" id="container-card">
              <div className="d-flex align-items-center justify-content-between">
                <ListTitle />
                <PaginationComponent />
              </div>
              <div className="row row-cols-1 row-cols-sm-4 gx-0 gx-3 gx-sm-3 gy-sm-3 mt-2">
                <Card />
              </div>
            </div>
          </section>
        </main>
      </CarProvider>
    </>
  );
}

export default SearchPage;
