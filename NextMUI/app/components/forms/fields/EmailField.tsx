'use client'

import TextField from '@mui/material/TextField';
import { EmailFieldProps } from './field';
import { useState } from 'react';
import { Validator } from '@/utility/validator';
import useForm from '@/hooks/useForm';

export function EmailField(props: EmailFieldProps) {
  const [isValid, setIsValid] = useState(true);
  const [fieldValue, setFieldValue] = useState('');
  const {registerFieldValue} = useForm();
  const helperText = 'Please enter a valid email address';

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueIsValid = new Validator(e.target.value).isEmail().isValid;
    setIsValid(valueIsValid);
    setFieldValue(e.target.value);
  };

  const onBlurHandler = () => {
    if(isValid) {
      const valuePair = {
        key: props.label, 
        value: fieldValue
      }
      debugger
      registerFieldValue(valuePair)
    }
  }

  

  return (
    <TextField
      placeholder={props.placeholder}
      variant={props.variant}
      error={!isValid}
      helperText={isValid === false ? helperText : ''}
      id={props.id}
      label={props.label}
      fullWidth
      onChange={onChangeHandler}
      type='email'
      onBlur={onBlurHandler}
    />
  );
}
