import React, { useState } from 'react';
import './App.css';
function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === '' || password === '') {
            setError('Both fields are required');
        } else {
            setError('');
            alert(`Username: ${username}, Password: ${password}`);
        }
    };
    return (
        <div className="App">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                    />
                </div>
                {error && <p style={styles.error}>{error}</p>}
                <button type="submit" style={styles.button}>
                    Login
                </button>
            </form>
        </div>
    );
}
const styles = {
    form: {
        maxWidth: '400px',
        margin: '0 auto',
        padding: '2rem',
        border: '1px solid #ddd',
        borderRadius: '4px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    inputGroup: {
        marginBottom: '1rem',
    },
    label: {
        display: 'block',
        marginBottom: '0.5rem',
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        padding: '0.5rem',
        border: '1px solid #ddd',
        borderRadius: '4px',
    },
    button: {
        width: '100%',
        padding: '0.75rem',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#007bff',
        color: '#fff',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    error: {
        color: 'red',
        marginBottom: '1rem',
    },
};
export default App;