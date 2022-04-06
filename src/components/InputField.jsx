import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const InputField = () => {
  const [inputValue, setInputValue] = useState('')
  const [errorStatus, setErrorStatus] = useState(false)

  const inputChangeHandler = (e) => {
    setErrorStatus(false)
    setInputValue(e.target.value)
  }

  const submitHandler = () => {
    if (inputValue.trim().length === 0) {
      setInputValue('')
      setErrorStatus(true);
    } else {
      console.log(inputValue);
      setInputValue('')
    }
  }

  const keyPressHandler = (e) => {
    if (e.key === 'Enter') {
      submitHandler()
    }
  }


  return (
    <div className='inputField'>
      <TextField
        className='inputBox'
        error={errorStatus}
        id={errorStatus ? "outlined-error-helper-text" : "outlined-basic"}
        label={errorStatus ? "Input Valid Heading" : "Input Heading"}
        variant="outlined"
        value={inputValue}
        onChange={inputChangeHandler}
        onKeyPress={keyPressHandler}
      />
      <Button
        className='inputSubmit'
        variant="outlined"
        color={errorStatus ? "error" : "primary"}
        onClick={submitHandler}
      >
        <AddIcon />
      </Button>
    </div>
  )
}


export default InputField;