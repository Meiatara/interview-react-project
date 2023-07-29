import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RetrieveFoods from '../components/RetrieveFoods';
import img from '../assets/logo.png';
import img2 from '../assets/person-facing-challenges-at-work 1.svg';
import img1 from '../assets/person-planning-a-startup-business 1.svg';
import img3 from '../assets/Vector 391.svg';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedEmail = localStorage.getItem('email');

    if (storedToken && storedEmail) {
      setIsLoggedIn(true);
      setEmail(storedEmail);
    }
  }, [isLoggedIn, email]);

  const handleLogout = () => {
    localStorage.clear();
    alert('Logout success');
    navigate('/');
  };
  
    return (
      <>
        <div className="bg-container">
            <div className="bg-logo">
                <img src={img} className='logo'/>
            </div>
            <div className="bg-dsn-upp">
                <img src={img1} />
                <img src={img2} />
            </div>
            <img src={img3} className='bg-dsn-btm' />
          <div className="container">
            <div className="form-container">
              <h1 className="form-header">Dashboard</h1>
              <h4>Selamat datang {email}</h4>
              <h4>Daftar Makanan :</h4>
              <RetrieveFoods />
              <button className="btn btn-primary" onClick={handleLogout}>Keluar</button>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Dashboard;