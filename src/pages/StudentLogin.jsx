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
          borderRadius: 2,
          boxShadow: 'none',
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          sx={{
            mb: 3,
            color: 'var(--primary-dark)',
            fontWeight: 400,
            letterSpacing: 0.5,
            textAlign: 'center',
            fontSize: '1.5rem',
            background: 'none',
            borderBottom: 'none',
            pb: 0,
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
              background: 'var(--primary-medium)',
              color: '#fff',
              fontWeight: 400,
              fontSize: '1rem',
              borderRadius: 2,
              boxShadow: 'none',
              transition: 'transform 0.2s',
              '&:hover': {
                background: 'var(--primary-dark)',
                transform: 'scale(1.03)',
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
