'use client';

import React, { useReducer, useState } from 'react';
import { ActionPanel, FormActionProps } from './action';
import { FieldProvider } from './fieldProvider';
import { FormField } from './fields/field';
import { Box } from '@mui/material';
import type { formState, FormProps, formController } from './form-types';
import { FormContextProvider } from '@/context/formContextProvider';



function DynamicForm(props: FormProps) {

  const fields = FieldProvider(props.fields).GetFields();

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    debugger;
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
  )
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
