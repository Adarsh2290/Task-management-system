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
          background: 'rgba(234,239,239,0.95)',
          padding: 4,
          borderRadius: 3,
          boxShadow: 3,
          animation: 'fadeIn 1s',
        }}
      >
        <Typography
          component="h1"
          variant="h3"
          sx={{
            mb: 4,
            color: 'var(--primary-dark)',
            fontWeight: 'bold',
            letterSpacing: 1,
            textAlign: 'center',
            borderBottom: '3px solid var(--accent-yellow)',
            pb: 1,
            width: '100%',
            background: 'linear-gradient(90deg, var(--accent-pink) 0%, var(--accent-yellow) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Task Management System
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', width: '100%' }}>
          <Button
            variant="contained"
            onClick={() => navigate('/student-login')}
            sx={{
              background: 'linear-gradient(90deg, var(--primary-medium) 60%, var(--accent-green) 100%)',
              color: '#fff',
              fontWeight: 'bold',
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontSize: '1.1rem',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 2px 8px 0 rgba(127,140,170,0.08)',
              '&:hover': {
                background: 'linear-gradient(90deg, var(--primary-dark) 60%, var(--accent-green) 100%)',
                transform: 'scale(1.08)',
                boxShadow: '0 4px 16px 0 rgba(127,140,170,0.16)',
              },
            }}
          >
            Student
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate('/teacher-login')}
            sx={{
              background: 'linear-gradient(90deg, var(--primary-light) 60%, var(--accent-pink) 100%)',
              color: 'var(--primary-dark)',
              fontWeight: 'bold',
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontSize: '1.1rem',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 2px 8px 0 rgba(184,207,206,0.08)',
              '&:hover': {
                background: 'linear-gradient(90deg, var(--primary-medium) 60%, var(--accent-pink) 100%)',
                color: '#fff',
                transform: 'scale(1.08)',
                boxShadow: '0 4px 16px 0 rgba(184,207,206,0.16)',
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
