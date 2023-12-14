'use client';

import React from 'react';
import { ActionPanel, FormActionProps } from './action';
import { FieldProvider } from './fieldProvider';
import { FormField } from './fields/field';
import { Box, useForkRef } from '@mui/material';
import type { FormProps } from './form-types';
import { FormContextProvider } from '@/context/formContextProvider';
import useForm from '@/hooks/useForm';
import { FormWarningBox } from './formWarningBox';

function DynamicForm(props: FormProps) {
  const fields = FieldProvider(props.fields).GetFields();
  const { formState } = useForm();

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      {fields.map((field, index) => {
        return (
          <Box
            paddingY={1}
            key={'field-' + index}
          >
            {field}
          </Box>
        );
      })}
      <Box>
        <FormWarningBox message={formState.errorMsg} show={formState.hasError()} as='error'/>
      </Box>
      <ActionPanel
        panelPosition='left'
        actions={props.actions}
      />
    </form>
  );
}

function Form(props: FormProps) {
  return (
    <FormContextProvider>
      <DynamicForm {...props} />
    </FormContextProvider>
  );
}

export function SignUpForm() {
  const fields: FormField[] = [
    {
      id: 'username',
      label: 'Username',
      fieldType: 'text',
      placeholder: 'Enter a unique account name...',
    },
    {
      id: 'email',
      label: 'Email',
      fieldType: 'email',
      placeholder: 'Type your email address...',
    },
    {
      id: 'password',
      label: 'Password',
      fieldType: 'password',
      placeholder: 'Enter a secure password...',
    },
  ];

  const actions: FormActionProps[] = [
    {
      label: 'Sign Up!',
      isPrimary: true,
      color: 'success',
      
    },
  ];

  return (
    <Form
      action='/signup'
      method='POST'
      actions={actions}
      fields={fields}
    />
  );
}
