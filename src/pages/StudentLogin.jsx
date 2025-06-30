import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const STUDENT_CREDENTIALS = { username: 'rrr', password: '111' };

const StudentLogin = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      credentials.username === STUDENT_CREDENTIALS.username &&
      credentials.password === STUDENT_CREDENTIALS.password
    ) {
      setError('');
      navigate('/student-dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Box
        sx={{
          width: '100%',
          mt: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'rgba(234,239,239,0.97)',
          padding: 4,
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          sx={{
            mb: 4,
            color: 'var(--primary-dark)',
            fontWeight: 'bold',
            letterSpacing: 1,
            textAlign: 'center',
            borderBottom: '3px solid var(--accent-green)',
            pb: 1,
            width: '100%',
            background: 'linear-gradient(90deg, var(--accent-green) 0%, var(--primary-medium) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Student Login
        </Typography>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'var(--primary-medium)',
                },
                '&:hover fieldset': {
                  borderColor: 'var(--accent-green)',
                },
              },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'var(--primary-medium)',
                },
                '&:hover fieldset': {
                  borderColor: 'var(--accent-green)',
                },
              },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              background: 'linear-gradient(90deg, var(--primary-medium) 60%, var(--accent-green) 100%)',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              borderRadius: 2,
              transition: 'transform 0.2s',
              '&:hover': {
                background: 'linear-gradient(90deg, var(--primary-dark) 60%, var(--accent-green) 100%)',
                transform: 'scale(1.05)',
              },
            }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default StudentLogin;
