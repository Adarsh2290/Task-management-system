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
          borderRadius: 2,
          boxShadow: 'none',
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          sx={{
            color: 'var(--primary-dark)',
            fontWeight: 400,
            mb: 3,
            textAlign: 'center',
            fontSize: '1.5rem',
            background: 'none',
            borderBottom: 'none',
            pb: 0,
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
                background: 'var(--background)',
                borderRadius: 1,
                '&:hover': {
                  background: 'var(--primary-light)',
                },
              }}
            >
              <ListItemText
                primary={task.title}
                secondary={task.description}
                sx={{
                  '& .MuiListItemText-primary': {
                    color: 'var(--primary-dark)',
                    fontWeight: 400,
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
                    fontWeight: 400,
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
