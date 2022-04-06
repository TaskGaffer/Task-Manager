import React, {useState} from 'react';
import TasksContainer from './TasksContainer';
import Container from '@mui/material/Box';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';


const HeadingContainer = ({data, setData}) => {

  const heading = [];
data.forEach((el, index) => {
  heading.push(
    <TasksContainer
      key={index}
      title={el.heading}
      id={el.header_id}
      tasks={el.tasks}
      data={data}
      setData={setData}
    />
  );
});
// good
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
