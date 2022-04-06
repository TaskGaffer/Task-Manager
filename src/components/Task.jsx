import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

<<<<<<< HEAD
const Task = () => {
  return (
    <div></div>
=======
const Task = ({id, taskText, progress, position}) => {

  return (
    <div>
      {taskText}
    </div>

>>>>>>> 77bf1881f241edbcc1e049ec5d974fd3467a3053
  )
}


export default Task;