import { useEffect, useState } from 'react';
import api from '../../services/api';
import './Home.scss';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const fetchProfile = async () => {
    try {
      const res = await api.get('/users/profile');
      setEmail(res.data.email);
    } catch (err) {
      navigate('/signin');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/signin');
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="home-container">
      <h1>Welcome to the application</h1>
      {email && <p>Logged in as: <strong>{email}</strong></p>}
      <button onClick={logout}>Logout</button>
    </div>
  );
}
