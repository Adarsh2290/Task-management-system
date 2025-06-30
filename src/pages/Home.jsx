import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Container } from '@mui/material';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'rgba(234,239,239,0.97)',
          padding: 4,
          borderRadius: 2,
          animation: 'fadeIn 1s',
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          sx={{
            mb: 3,
            color: 'var(--primary-dark)',
            fontWeight: 400,
            letterSpacing: 0.5,
            textAlign: 'center',
            fontSize: '2rem',
            background: 'none',
            borderBottom: 'none',
            pb: 0,
          }}
        >
          Task Management System
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', width: '100%' }}>
          <Button
            variant="contained"
            onClick={() => navigate('/student-login')}
            sx={{
              background: 'var(--primary-medium)',
              color: '#fff',
              fontWeight: 400,
              px: 4,
              py: 1.2,
              borderRadius: 2,
              fontSize: '1rem',
              boxShadow: 'none',
              transition: 'transform 0.2s',
              '&:hover': {
                background: 'var(--primary-dark)',
                transform: 'scale(1.04)',
              },
            }}
          >
            Student
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate('/teacher-login')}
            sx={{
              background: 'var(--primary-light)',
              color: 'var(--primary-dark)',
              fontWeight: 400,
              px: 4,
              py: 1.2,
              borderRadius: 2,
              fontSize: '1rem',
              boxShadow: 'none',
              transition: 'transform 0.2s',
              '&:hover': {
                background: 'var(--primary-medium)',
                color: '#fff',
                transform: 'scale(1.04)',
              },
            }}
          >
            Teacher
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
