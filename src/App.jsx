import React, { useState } from 'react';
import NavBar from './components/NavBar';
import InputField from './components/InputField';
import HeadingContainer from './containers/HeadingContainer';
import './styles.css'
import { Grid } from '@mui/material';

const dummyData = [
  {
    heading: 'Science',
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
      }
    ]
  },
  {
    heading: 'Rave',
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

function App() {

  const [data, setData] = useState(dummyData)
  


  return (

    <Grid>
      <Grid>
        <NavBar />
      </Grid>
      <Grid>
        <InputField data={data} setData={setData}/>
      </Grid>
      <Grid>
        <HeadingContainer data={data} setData={setData}/>
      </Grid>
    </Grid>

  );
}
export default App;
