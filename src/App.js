import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CheckingForm from "./components/CheckingForm/CheckingForm";
import { BookingProvider } from "./Context/BookingContext";
import SuccessForm from "./components/SuccessForm/SuccessForm";

const App = () => {
  return (
    <div className="app">
      
        <BrowserRouter>
          <BookingProvider><Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/form" element={<CheckingForm />} />
            <Route exact path="/success" element={<SuccessForm/>}/>
          </Routes>
          <Footer /></BookingProvider>
        </BrowserRouter>
      
    </div>
  );
};

export default App;
