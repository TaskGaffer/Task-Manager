import React from 'react';
import NavBar from './components/NavBar';
import InputField from './components/InputField';
import HeadingContainer from './containers/HeadingContainer';
import './styles.css'

import {Grid} from '@mui/material';

function App() {

  const getHeaders = () => {
    const url = '/header/getAllHeaders';
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ user_id: 1 }), //hard coded user_id for testing
    })
      .then((data) => data.json())
      .then((result) => {
        const headers = result;
        // for each header element call fetch req to get its tasks
        headers.forEach((header) => {
          getTasks(header._id);
        });
      });
  };

  const getTasks = (header_id) => {
    const url = '/tasks/getTasks';
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ header_id }), //hard coded for testing
    })
      .then((data) => data.json())
      .then((result) => {
        const tasks = result;
        dispatch(textUpdate.textUpdate(tasks));
        console.log('Here is the data object ', tasks);
      });
  };

  return (
    
    <Grid>
      <Grid>
        <NavBar />
      </Grid>
      <Grid>
        <InputField />
      </Grid>
      <Grid>
        <HeadingContainer />
      </Grid>
    </Grid>

  );
}
export default App;
