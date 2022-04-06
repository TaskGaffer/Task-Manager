import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import { useSelector, useDispatch } from 'react-redux';
import { inputAction } from '../features/slices/input-slice';

const InputField = () => {
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
        variant='outlined'
        value={inputValue}
        onChange={inputChangeHandler}
        onKeyPress={keyPressHandler}
      />
      <Button
        className='inputSubmit'
        variant='outlined'
        color={errorStatus ? 'error' : 'primary'}
        onClick={submitHandler}
      >
        <AddIcon />
      </Button>
    </div>
  );
};

export default InputField;
