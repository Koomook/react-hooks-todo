import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';
import { Button } from '@material-ui/core';

const TodoForm = ({ saveTodo }) => {
  const { value, reset, onChange } = useInputState();

  const submit = event => {
    event.preventDefault();

    saveTodo(value);
    reset();
  }

  return (
    <form
      onSubmit={submit}
    >
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={onChange}
        value={value}
      />
      <br></br>
      <Button
        variant="outlined"
        margin="normal"
        color="primary"
        onClick={submit}
      >
      submit
      </Button>
    </form>
  );
};

export default TodoForm;