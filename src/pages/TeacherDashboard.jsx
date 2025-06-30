import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { useTaskContext } from '../components/TaskContext';

const TeacherDashboard = () => {
  const { tasks, addTask } = useTaskContext();
  const [open, setOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    assignedTo: '',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddTask = () => {
    if (!newTask.title || !newTask.description || !newTask.assignedTo) return;
    addTask(newTask);
    setNewTask({ title: '', description: '', assignedTo: '' });
    handleClose();
  };

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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, width: '100%' }}>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              color: 'var(--primary-dark)',
              fontWeight: 'bold',
              textAlign: 'center',
              borderBottom: '3px solid var(--accent-yellow)',
              pb: 1,
              width: '100%',
              background: 'linear-gradient(90deg, var(--accent-yellow) 0%, var(--primary-light) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Task Management
          </Typography>
          <Button
            variant="contained"
            onClick={handleClickOpen}
            sx={{
              background: 'linear-gradient(90deg, var(--primary-medium) 60%, var(--accent-yellow) 100%)',
              color: '#fff',
              fontWeight: 'bold',
              px: 3,
              py: 1.2,
              borderRadius: 2,
              fontSize: '1rem',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 2px 8px 0 rgba(127,140,170,0.08)',
              '&:hover': {
                background: 'linear-gradient(90deg, var(--primary-dark) 60%, var(--accent-yellow) 100%)',
                transform: 'scale(1.08)',
                boxShadow: '0 4px 16px 0 rgba(127,140,170,0.16)',
              },
            }}
          >
            Assign New Task
          </Button>
        </Box>

        <List sx={{ width: '100%' }}>
          {tasks.map((task) => (
            <ListItem
              key={task.id}
              sx={{
                mb: 2,
                background: 'linear-gradient(90deg, var(--background) 60%, var(--primary-light) 100%)',
                borderRadius: 1,
                '&:hover': {
                  background: 'linear-gradient(90deg, var(--primary-light) 60%, var(--accent-yellow) 100%)',
                },
              }}
            >
              <ListItemText
                primary={task.title}
                secondary={
                  <>
                    <Typography component="span" variant="body2" color="var(--primary-medium)">
                      {task.description}
                    </Typography>
                    <br />
                    <Typography component="span" variant="body2" color="var(--primary-dark)">
                      Assigned to: {task.assignedTo}
                    </Typography>
                  </>
                }
              />
              <Typography
                variant="body2"
                sx={{
                  color: task.completed ? 'var(--accent-green)' : 'var(--accent-pink)',
                  fontWeight: 'bold',
                }}
              >
                {task.completed ? 'Completed' : 'Pending'}
              </Typography>
            </ListItem>
          ))}
        </List>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle sx={{ color: 'var(--primary-dark)' }}>Assign New Task</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Task Title"
              type="text"
              fullWidth
              variant="outlined"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'var(--primary-medium)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'var(--accent-yellow)',
                  },
                },
              }}
            />
            <TextField
              margin="dense"
              label="Description"
              type="text"
              fullWidth
              variant="outlined"
              multiline
              rows={3}
              value={newTask.description}
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'var(--primary-medium)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'var(--accent-yellow)',
                  },
                },
              }}
            />
            <TextField
              margin="dense"
              label="Assign To (username)"
              type="text"
              fullWidth
              variant="outlined"
              value={newTask.assignedTo}
              onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'var(--primary-medium)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'var(--accent-yellow)',
                  },
                },
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              sx={{
                color: 'var(--primary-dark)',
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleAddTask}
              variant="contained"
              sx={{
                background: 'linear-gradient(90deg, var(--primary-medium) 60%, var(--accent-yellow) 100%)',
                color: '#fff',
                fontWeight: 'bold',
                transition: 'transform 0.2s',
                '&:hover': {
                  background: 'linear-gradient(90deg, var(--primary-dark) 60%, var(--accent-yellow) 100%)',
                  transform: 'scale(1.05)',
                },
              }}
            >
              Assign Task
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
};

export default TeacherDashboard;
