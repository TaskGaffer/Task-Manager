import React from 'react';
import NavBar from './components/NavBar';
import InputField from './components/InputField';
import HeadingContainer from './containers/HeadingContainer';
import './styles.css'

import {Grid} from '@mui/material';

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

<<<<<<< HEAD
  </Grid>

  )
=======
  );
>>>>>>> dev
}
export default App;
