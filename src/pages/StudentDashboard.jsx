import React from 'react';
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Checkbox,
} from '@mui/material';
import { useTaskContext } from '../components/TaskContext';

const STUDENT_USERNAME = 'rrr';

const StudentDashboard = () => {
  const { tasks, markTaskComplete } = useTaskContext();
  const studentTasks = tasks.filter((task) => task.assignedTo === STUDENT_USERNAME);

  return (
    <Container maxWidth="md" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Box
        sx={{
          width: '100%',
          mt: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          alignItems: 'center',
          background: 'rgba(234,239,239,0.97)',
          padding: 4,
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            color: 'var(--primary-dark)',
            fontWeight: 'bold',
            mb: 3,
            textAlign: 'center',
            borderBottom: '3px solid var(--accent-green)',
            pb: 1,
            width: '100%',
            background: 'linear-gradient(90deg, var(--accent-green) 0%, var(--primary-medium) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          My Tasks
        </Typography>
        <List sx={{ width: '100%' }}>
          {studentTasks.map((task) => (
            <ListItem
              key={task.id}
              sx={{
                mb: 2,
                background: 'linear-gradient(90deg, var(--background) 60%, var(--primary-light) 100%)',
                borderRadius: 1,
                '&:hover': {
                  background: 'linear-gradient(90deg, var(--primary-light) 60%, var(--accent-green) 100%)',
                },
              }}
            >
              <ListItemText
                primary={task.title}
                secondary={task.description}
                sx={{
                  '& .MuiListItemText-primary': {
                    color: 'var(--primary-dark)',
                    fontWeight: 'bold',
                  },
                  '& .MuiListItemText-secondary': {
                    color: 'var(--primary-medium)',
                  },
                }}
              />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: task.completed ? 'var(--accent-green)' : 'var(--accent-pink)',
                    fontWeight: 'bold',
                  }}
                >
                  {task.completed ? 'Completed' : 'Pending'}
                </Typography>
                <Checkbox
                  checked={task.completed}
                  onChange={() => markTaskComplete(task.id)}
                  sx={{
                    color: 'var(--primary-medium)',
                    '&.Mui-checked': {
                      color: 'var(--accent-green)',
                    },
                  }}
                />
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default StudentDashboard;
