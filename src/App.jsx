import React from 'react';
import NavBar from './components/NavBar';
import InputField from './components/InputField';
import HeadingContainer from './containers/HeadingContainer'

import { useSelector } from 'react-redux'
import ReactDOM from 'react-dom'

import { Grid } from '@mui/material';


function App() {
  ////const logged = useSelector((state) => state?.login.loggedIn)
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

  )
}
export default App;
