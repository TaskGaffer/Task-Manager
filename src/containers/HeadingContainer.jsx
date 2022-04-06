import React from 'react';
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
        task_order: 8,
        progress: 'incomplete'
      },
      {
        _id: 2,
        task: 'sleep',
        task_order: 3,
        progress: 'incomplete'
      }
    ]
  },
  {
    heading: 'rave',
    header_id: 1,
    tasks: [
      {
        _id: 1,
        task: 'eat',
        task_order: 2,
        progress: 'incomplete'
      },
      {
        _id: 2,
        task: 'repeat',
        task_order: 3,
        progress: 'incomplete'
      }
    ]
  }
];

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

const HeadingContainer = () => {
  return (
    <Container className="headingContainer" maxWidth="sm">
      <Box sx={{bgcolor: '#cfe8fc', height: '50vh'}}>{heading}</Box>
    </Container>
  );
};

export default HeadingContainer;
