import TextField from '@mui/material/TextField';
import { EmailFieldProps } from './field';
import { useState } from 'react';
import { Validator } from '@/utility/validator';

export function EmailField(props: EmailFieldProps) {
  const [isValid, setIsValid] = useState(true);
  const helperText = 'Please enter a valid email address';

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueIsValid = new Validator(e.target.value).isEmail().isValid;
    setIsValid(valueIsValid);
  };

  return (
    <TextField
      error={!isValid}
      helperText={isValid === false ? helperText : ''}
      id={props.id}
      label={props.label}
      onChange={onChangeHandler}
      type='email'
    />
  );
}
