import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
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

  const token = useSelector(state => state.auth.token);
  const user = useSelector(state => state.auth.user);
  useEffect(() => {
    //local storage update
    if (token) {
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  }, [token, user]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* First Page */}
        <Route path="/Signin" element={<Signin />} /> {/* Login Page */}
        <Route path="/User" element={<User />} /> {/* User Account Page */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
