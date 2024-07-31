import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Home = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedDress, setSelectedDress] = useState("Bridal Lehenga");

  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Card"
            height={700}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">Welcome to RUR</h5>
              <p className="card-text fs-5 d-none d-sm-block">
                Rent-Use-Return
              </p>
              <div style={{ marginTop: '2rem' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="form-control"
                    dateFormat="MMMM d, yyyy"
                  />
                </div>
                <div style={{ marginBottom: '1rem', maxWidth: '120px' }}>
                  <select
                    value={selectedDress}
                    onChange={(e) => setSelectedDress(e.target.value)}
                    className="form-control"
                    style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }}
                  >
                    <option value="Bridal Lehenga">Bridal Lehenga</option>
                    <option value="Evening Gown">Evening Gown</option>
                    <option value="Party Dress">Party Dress</option>
                    <option value="Casual Wear">Casual Wear</option>
                  </select>
                </div>
                <button style={{ padding: '0.5rem 1rem', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '0.25rem' }}>
                  View Outfits
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
