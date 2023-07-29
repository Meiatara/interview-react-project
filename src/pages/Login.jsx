import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import img from '../assets/logo.png';
import img1 from '../assets/person-planning-a-startup-business 1.svg';
import img2 from '../assets/person-facing-challenges-at-work 1.svg';
import img3 from '../assets/Vector 391.svg';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post(
          'https://interview-api.pilihjurusan.id/users/authenticate',
          { email, password }
        );
        const token = response.data.token;
        const loggedInemail = response.data.email;
        localStorage.setItem('token', token);
        localStorage.setItem('email', loggedInemail);
  
        setEmail('');
        setPassword('');
  
        if (response.status === 200) {
            alert('Login success');
            navigate('/dashboard');
          }
        } catch (error) {
          console.error(error);
        }
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
              <h1 className="form-header">Masuk</h1>
              <h4>Masukkan alamat email kata sandi yang telah anda daftarkan.</h4>
              <form onSubmit={handleSubmit}>
                  <input className="input-field" type="email" placeholder="user@user.com" onChange={handleEmailChange} required/>
                  <input className="input-field" type="password" placeholder="********" onChange={handlePasswordChange} required/>
                <button className="btn btn-primary">Masuk Sekarang</button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
};

export default Login;