import { ActionPanel, FormActionProps } from "./action";

type DynamicFormProps = {
  actions: {
    execute: () => void,
    label: string
  }
}

function DynamicForm(props: DynamicFormProps) {
  
}


export function SignUpForm() {

  const actions: FormActionProps[] = []

  return (
    <form action=''>
      <ActionPanel actions={actions} panelPosition="center"/>
    </form>
  )
}
