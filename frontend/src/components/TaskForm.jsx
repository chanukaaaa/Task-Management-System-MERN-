import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, editingTask }) => {
  const [task, setTask] = useState({
    name: '',
    description: '',
    assignedTo: '',
  });

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask);
    } else {
      setTask({ name: '', description: '', assignedTo: '' });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Task Name:</label>
        <input type="text" name="name" value={task.name} onChange={handleChange} />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" name="description" value={task.description} onChange={handleChange} />
      </div>
      <div>
        <label>Assigned To:</label>
        <input type="text" name="assignedTo" value={task.assignedTo} onChange={handleChange} />
      </div>
      <button type="submit">{editingTask ? 'Update Task' : 'Create Task'}</button>
    </form>
  );
};

export default TaskForm;
