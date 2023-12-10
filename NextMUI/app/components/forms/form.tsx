import { ActionPanel, FormActionProps } from './action';
import { FieldProvider } from './fieldProvider';
import { FormField } from './fields/field';
import { Box } from '@mui/material';

type DynamicFormProps = {
  actions: FormActionProps[];
  fields: FormField[];
  action: string;
  method: 'GET' | 'POST';
};

function DynamicForm(props: DynamicFormProps) {
  const fields = FieldProvider(props.fields).GetFields();

  return (
    <form
      action={props.action}
      method={props.method}
    >
      {fields.map((field, index) => {
        return (
          <Box paddingY={1} key={'field-' + index}>
            {field}
          </Box>
        )
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
      label: 'username',
      fieldType: 'text',
    },
    {
      id: 'email',
      label: 'Email',
      fieldType: 'email',
      placeholder: 'Type your email address...'
    },
    {
      id: 'password',
      label: 'password',
      fieldType: 'password'
    }
  ];

  const actions: FormActionProps[] = [
    {
      label: 'Sign Up!',
      isPrimary: true,
      color: 'success'
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
