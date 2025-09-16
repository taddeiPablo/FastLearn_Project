import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from './lib/supabaseClient';
import { FastContextProvider } from './context/FastContext';

import NavBar from './components/Navbar';

import Home from './pages/home/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
     event === 'SIGNED_OUT' && navigate("/login");
     event === 'SIGNED_IN' && navigate("/dashboard");  
     console.log(event, session);
    });
  }, [navigate]);

  return (
    <div className="App">
      <NavBar />
      <FastContextProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </FastContextProvider>
    </div>
  );
}

export default App;
