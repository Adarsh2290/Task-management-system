import React, { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

const initialTasks = [
  {
    id: 1,
    title: 'Complete Math Assignment',
    description: 'Solve problems 1-10',
    completed: false,
    assignedTo: 'rrr',
  },
  {
    id: 2,
    title: 'Read Science Chapter',
    description: 'Chapter 5: Solar System',
    completed: false,
    assignedTo: 'rrr',
  },
];

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (task) => {
    setTasks((prev) => [
      ...prev,
      { ...task, id: prev.length + 1, completed: false },
    ]);
  };

  const markTaskComplete = (taskId) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, markTaskComplete }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
