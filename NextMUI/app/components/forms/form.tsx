'use client';

import { useReducer, useState } from 'react';
import { ActionPanel, FormActionProps } from './action';
import { FieldProvider } from './fieldProvider';
import { FormField } from './fields/field';
import { Box } from '@mui/material';
import type { formState, FormProps, formController } from './form-types';

const initFormState: formState = {
  isLoading: false,
  isDisabled: false,
  errorMsg: '',
  hasError: () => initFormState.errorMsg.length > 0
};

enum formActionKind {
  NOT_LOADING,
  IS_LOADING,
  ENABLE,
  DISABLE
}

function formReducer(state: formState, action: formActionKind) {
  switch(action) {
    case formActionKind.DISABLE:
      return {
        ...state,
        isDisabled: true
      };
    case formActionKind.ENABLE:
      return {
        ...state,
        isDisabled: false
      }
    case formActionKind.IS_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case formActionKind.NOT_LOADING:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
}

function DynamicForm(props: FormProps) {
  const [formState, setFormState] = useReducer(formReducer, initFormState);

  const controller : formController = {
    formIsDisabled: formState.isDisabled ? true : false,
    formIsLoading: formState.isLoading ? true : false
  }

  const fields = FieldProvider(props.fields, controller).GetFields();

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
