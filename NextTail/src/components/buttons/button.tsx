import Link from "next/link";


type ButtonProps = {
  asLink?: boolean;
  content: JSX.Element;
  href?: string;
  execute: () => void;
  colorScheme: string;
  size: 'sm' | 'md' | 'lg';
}

export function Button(props: ButtonProps) {
  if(props.asLink) {
    return (
      <Link href={props.href ? props.href : '#'}>
        <button></button>
      </Link>
    )
  }

  return (
    <button></button>
  )


}