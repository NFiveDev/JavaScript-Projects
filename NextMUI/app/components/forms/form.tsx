import { ActionPanel, FormActionProps } from "./action";
import { FieldProvider, IField } from "./field";

type DynamicFormProps = {
  actions: FormActionProps[];
  fields: IField[]
}

function DynamicForm(props: DynamicFormProps) {

  const fields = FieldProvider(props.fields).GetFields();

  return (
    <form>
      {fields}

    </form>
  )


}


export function SignUpForm() {

  const fields: IField[] = [
    {
      id:'username',
      label: 'username',
      fieldType: 'text',
      
    }
  ]

  const actions: FormActionProps[] = []

  return <DynamicForm actions={actions} fields={fields}/>
}
