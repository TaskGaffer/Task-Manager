import React from 'react';
import Header from '../components/Header';
import Task from '../components/Task';


<<<<<<< HEAD
const TaskContainer = () => {
  return (
    <div></div>
  )
}
=======
const TasksContainer = ({title, id, tasks}) => {

  tasks.sort((a,b) => a.task_order - b.task_order)
>>>>>>> 77bf1881f241edbcc1e049ec5d974fd3467a3053

  const taskList = []
  tasks.forEach((task,index) => {
    taskList.push(
        <Task key={index} id={task._id} taskText={task.task} progress={task.progress} position={task.task_order}/> 
    )
  });
  return (
    <div>
      <h1>{title}</h1>
      {taskList}
    </div>
  )
}

export default TasksContainer;