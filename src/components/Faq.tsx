function Faq() {
  return (
    <section id="faq-section">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h1 className="fw-bold" style={{ fontSize: "24px" }}>
              Frequently Asked Question
            </h1>
            <p style={{ fontSize: "14px", color: "rgba(0, 0, 0, 0.479)" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className="col-md-7">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="card mb-2">
                <div
                  className="accordion-header accordion-button collapsed rounded"
                  id="flush-headingOne"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  <p>Apa saja syarat yang dibutuhkan</p>
                </div>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi alias expedita ullam corporis quod adipisci distinctio
                    assumenda perspiciatis! Vero ab sapiente nihil suscipit
                    praesentium numquam architecto molestiae! Nisi, similique
                    aperiam.
                  </div>
                </div>
              </div>
              <div className="card mb-2">
                <div
                  className="accordion-header accordion-button collapsed rounded"
                  id="flush-headingTwo"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  <p>Berapa hari minimal sewa mobil lepas kunci?</p>
                </div>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi alias expedita ullam corporis quod adipisci distinctio
                    assumenda perspiciatis! Vero ab sapiente nihil suscipit
                    praesentium numquam architecto molestiae! Nisi, similique
                    aperiam.
                  </div>
                </div>
              </div>
              <div className="card mb-2">
                <div
                  className="accordion-header accordion-button collapsed rounded"
                  id="flush-headingThree"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  <p>Berapa hari sebelumnya sabaiknya booking sewa mobil?</p>
                </div>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi alias expedita ullam corporis quod adipisci distinctio
                    assumenda perspiciatis! Vero ab sapiente nihil suscipit
                    praesentium numquam architecto molestiae! Nisi, similique
                    aperiam.
                  </div>
                </div>
              </div>
              <div className="card mb-2">
                <div
                  className="accordion-header accordion-button collapsed rounded"
                  id="flush-headingFour"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  <p>Apakah Ada biaya antar-jemput?</p>
                </div>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi alias expedita ullam corporis quod adipisci distinctio
                    assumenda perspiciatis! Vero ab sapiente nihil suscipit
                    praesentium numquam architecto molestiae! Nisi, similique
                    aperiam.
                  </div>
                </div>
              </div>
              <div className="card mb-2">
                <div
                  className="accordion-header accordion-button collapsed rounded"
                  id="flush-headingFive"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  <p>Bagaimana jika terjadi kecelakaan</p>
                </div>
                <div
                  id="flush-collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi alias expedita ullam corporis quod adipisci distinctio
                    assumenda perspiciatis! Vero ab sapiente nihil suscipit
                    praesentium numquam architecto molestiae! Nisi, similique
                    aperiam.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
