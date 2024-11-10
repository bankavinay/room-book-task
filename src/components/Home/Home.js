import "./Home.css";
import home from "../../images/home.jpg";
import { useState } from "react";
import Discover from "../Discover/Discover";
import Services from "../Services/Services";
import { Link } from "react-router-dom";

const Home = () => {
  const [rooms, setRooms] = useState(1);
  const todayDate = new Date().toISOString().split("T")[0];

  const onClickMinus = () => {
    if (rooms > 1) {
      setRooms(rooms - 1);
    }
  };

  const onClickPlus = () => {
    if (rooms < 3) {
      setRooms(rooms + 1);
    }
  };

  return (
    <div className="home-container">
      <div className="details-container">
        <div className="left-container">
          <h1>
            Work from <br />
            Ladakh
          </h1>
          <p>India's first true digital tourism ecosystem</p>
          <div className="icons-container">
            <i className="bx bxl-facebook-circle"></i>
            <i className="bx bxl-instagram-alt"></i>
          </div>
        </div>
        <img src={home} alt="" className="img" />
      </div>
      <div className="banner-container">
        <div className="check-in-container">
          <p>CHECK-IN</p>
          <input className="input" type="date" min={todayDate} />
        </div>
        <div className="hr"></div>
        <div className="check-in-container">
          <p>CHECK-OUT</p>
          <input className="input" type="date" />
        </div>
        <div className="hr"></div>
        <div className="rooms-container">
          <label>Rooms</label>
          <div className="buttons-container">
            <button
              className="button-minus"
              onClick={onClickMinus}
              disabled={rooms <= 1}
            >
              -
            </button>
            <p>{rooms}</p>
            <button
              className="plus-button"
              onClick={onClickPlus}
              disabled={rooms >= 3}
            >
              +
            </button>
          </div>
        </div>
        <div className="hr"></div>
        <div className="book-btn-container">
          <Link to="/form">
            <button className="book-button" type="button">
              BOOK
            </button>
          </Link>
        </div>
      </div>
      <Discover />
      <Services />
    </div>
  );
};

export default Home;
