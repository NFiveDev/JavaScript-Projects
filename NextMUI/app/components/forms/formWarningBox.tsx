
type FormWarningBoxProps = {
  as: 'warning' | 'error',
  message: string,
  show: boolean;
}

export function FormWarningBox(props: FormWarningBoxProps) {
  return (
    <>
      <p>{props.message}</p>
    </>
  )
}