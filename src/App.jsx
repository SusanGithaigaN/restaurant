import './App.css';


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dishes from './assets/components/Dishes';
import Home from './assets/components/Home/Home';
import Navbar from './assets/components/Navbar/Navbar';
import Footer from './assets/components/Footer/Footer';

const DashBoard = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dish" element={<Dishes/>} />
      </Routes>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Router>
        <DashBoard />
      </Router>
    </div>
  );
}

export default App;
