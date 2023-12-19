import Link from "next/link";


type ButtonProps = {
  asLink?: boolean;
  content: JSX.Element;
  href?: string;
  execute?: () => void;
  colorScheme: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  outline?: boolean;
}

export function Button(props: ButtonProps) {

  const onClickHandler = () => {
    if (!props.execute) return;
    props.execute();
  }

  if (props.asLink) {
    return (
      <Link href={props.href ? props.href : '#'}>
        <button onClick={onClickHandler}></button>
      </Link>
    )
  }

  return (
    <button onClick={onClickHandler}></button>
  )


}