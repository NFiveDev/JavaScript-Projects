'use client';

import { useReducer, useState } from 'react';
import { ActionPanel, FormActionProps } from './action';
import { FieldProvider } from './fieldProvider';
import { FormField } from './fields/field';
import { Box } from '@mui/material';
import type { formState, formActionKind, DynamicFormProps } from './form-types';

const initFormState: formState = {
  isloading: false,
  isDisabled: false,
  errorMsg: '',
  hasError: () => {
    return initFormState.errorMsg.length > 0;
  },
};

function formReducer(state: formState, action: formActionKind) {

}

function DynamicForm(props: DynamicFormProps) {
  const [dynamicFormState, setFormState] = useReducer(initFormState, formReducer);

  const controller = {

  }

  const fields = FieldProvider(props.fields).GetFields();

  return (
    <form
      action={props.action}
      method={props.method}
    >
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
    <DynamicForm
      action='/signup'
      method='POST'
      actions={actions}
      fields={fields}
    />
  );
}
