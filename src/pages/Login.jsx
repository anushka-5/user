import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../redux-store/slices/userSlice';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:1337/api/auth/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: email,
        password,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (data.jwt) {
      localStorage.setItem('token', data.jwt);
      localStorage.setItem('user', JSON.stringify(data.user));

      alert('Login Successful!');
    } else {
      alert('Login Failed!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;