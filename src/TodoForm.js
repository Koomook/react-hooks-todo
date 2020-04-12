import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';
import { Button } from '@material-ui/core';

const TodoForm = ({ saveTodo }) => {
  const { value, reset, onChange } = useInputState();

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        saveTodo(value);
        reset();
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={onChange}
        value={value}
      />
      <Button
        variant="outlined"
        margin="normal"
        onClick={event => {
          event.preventDefault();

          saveTodo(value);
          reset();
        }}
      >
        submit
      </Button>
    </form>
  );
};

export default TodoForm;