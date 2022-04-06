import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Task = ({id, taskText, progress, position}) => {

  return (
    <div>
      {taskText}
    </div>

  )
}


export default Task;