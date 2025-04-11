import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password.');
      setSuccess('');
      return;
    }

    if (email === 'admin@gmail.com' && password === 'pass123') {
      setSuccess('Login successful!');
      setError('');
    } else {
      setError('Invalid email or password.');
      setSuccess('');
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.form}>
        <h2>Login</h2>

        {error && <p style={styles.error}>{error}</p>}
        {success && <p style={styles.success}>{success}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',width: '100vw',display: 'flex',
    justifyContent: 'center',alignItems: 'center',
    background: 'linear-gradient(to right, #f8f9fa, #e9ecef)',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    padding: '2rem',borderRadius: '12px',
    background: '#ffffff',boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    width: '320px',display: 'flex',flexDirection: 'column',
  },
  input: {
    margin: '10px 0',padding: '12px',fontSize: '16px',
    borderRadius: '8px',border: '1px solid #ccc',
    outline: 'none',transition: 'border 0.3s ease',
  },
  button: {
    marginTop: '15px',padding: '12px',background: '#007bff',
    color: '#fff',fontSize: '16px',border: 'none',
    borderRadius: '8px',cursor: 'pointer',
    transition: 'background 0.3s ease',
  },

  error: {color: '#dc3545',fontSize: '14px',marginBottom: '10px',},
  success: {color: '#28a745',fontSize: '14px',marginBottom: '10px',}
};

export default LoginForm;
