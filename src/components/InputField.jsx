import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import { useSelector, useDispatch } from 'react-redux';
import { inputAction } from '../features/slices/input-slice';

const InputField = ({data, setData}) => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.input.inputHeader);
  const errorStatus = useSelector((state) => state.input.error);

  const inputChangeHandler = (e) => {
    dispatch(inputAction.setError(false));
    dispatch(inputAction.setInput(e.target.value));
  };

  const submitHandler = () => {
    if (inputValue.trim().length === 0) {
      dispatch(inputAction.setInput(''));
      dispatch(inputAction.setError(true));
    } else {
      // const createHeader = {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     header: inputValue,
      //     user_id: 1
      //   })
      // }
      // fetch('http://localhost:3000/header/newHeader', createHeader)
      setData([...data, {
        heading: inputValue,
        header_id:data.length + 1,
        tasks: []
      }])
      dispatch(inputAction.setInput(''));
    }
  };

  const keyPressHandler = (e) => {
    if (e.key === 'Enter') {
      submitHandler();
    }
  };

  return (
    <div className='inputField'>
      <TextField 
        className='inputBox'
        error={errorStatus}
        id={errorStatus ? 'outlined-error-helper-text' : 'outlined-basic'}
        label={errorStatus ? 'Input Valid Heading' : 'Input Heading'}
        variant='filled'
        value={inputValue}
        onChange={inputChangeHandler}
        onKeyPress={keyPressHandler}
      />
      <Button
        className='inputSubmit'
        variant='contained'
        color={errorStatus ? 'error' : 'secondary'}
        onClick={submitHandler}
      >
        <AddIcon />
      </Button>
    </div>
  );
};

export default InputField;
