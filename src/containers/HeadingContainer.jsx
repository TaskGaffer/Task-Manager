import React, {useState} from 'react';
import TasksContainer from './TasksContainer';
import Container from '@mui/material/Box';
import Box from '@mui/material/Box';

const dummyData = [
  {
    heading: 'science',
    header_id: 1,
    tasks: [
      {
        _id: 1,
        task: 'study',
        task_order: 0,
        progress: 'incomplete'
      },
      {
        _id: 2,
        task: 'sleep',
        task_order: 1,
        progress: 'incomplete'
      },
      {
        _id: 3,
        task: 'yup',
        task_order: 2,
        progress: 'incomplete'
      },
      {
        _id: 4,
        task: 'nop',
        task_order: 3,
        progress: 'incomplete'
      }
    ]
  },
  {
    heading: 'rave',
    header_id: 2,
    tasks: [
      {
        _id: 1,
        task: 'eat',
        task_order: 1,
        progress: 'incomplete'
      },
      {
        _id: 2,
        task: 'repeat',
        task_order: 0,
        progress: 'incomplete'
      }
    ]
  }
];

const HeadingContainer = () => {

const heading = [];
dummyData.forEach((el, index) => {
  heading.push(
    <TasksContainer
      key={index}
      title={el.heading}
      id={el._id}
      tasks={el.tasks}
    />
  );
});

  return (
    <Container>
      <Box
        className='boxContainer'
      >
        {heading}
      </Box>
    </Container>
  );
};

export default HeadingContainer;
