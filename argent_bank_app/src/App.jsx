import './App.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/*********/
/*       */
/* PAGES */
import Home from './pages/Home/';
import Signin from './pages/Signin/';
import User from './pages/User/';
/**************/
/*            */
/* COMPONENTS */
import Header from './components/Header/'
import Footer from './components/Footer/'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* First Page */}
        <Route path="/Signin" element={<Signin />} /> {/* Login Page */}
        <Route path="/User" element={<User />} /> {/* Login Page */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
