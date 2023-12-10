import { ActionPanel, FormActionProps } from './action';
import { FieldProvider } from './fieldProvider';
import { IField } from './fields/field';

type DynamicFormProps = {
  actions: FormActionProps[];
  fields: IField[];
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
      {fields}
    </form>
  );
}

export function SignUpForm() {
  const fields: IField[] = [
    {
      id: 'username',
      label: 'username',
      fieldType: 'text',
    },
  ];

  const actions: FormActionProps[] = [];

  return (
    <DynamicForm
      action='/signup'
      method='POST'
      actions={actions}
      fields={fields}
    />
  );
}
