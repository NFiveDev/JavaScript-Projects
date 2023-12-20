'use client'

import Link from 'next/link';
import { ConstructTailwindClassString, GetBackground, colorKey } from './styles';

type ButtonProps = {
  asLink?: boolean;
  children: JSX.Element;
  href?: string;
  execute?: () => void;
  colorScheme: colorKey;
  size: 'sm' | 'md' | 'lg';
  outline?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit';
};

const defaultButtonProps: ButtonProps = {
  asLink: false,
  children: <p>button</p>,
  size: 'md',
  disabled: false,
  colorScheme: 'emerald',
};

function buttonStylesBuilder(
  size: string,
  colorScheme: colorKey,
  outline = false
) {
  let styledClass: string[] = [];

  if (outline) {

  } else {
    styledClass.push(GetBackground(colorScheme));

  }

  return ConstructTailwindClassString(styledClass);
}

export function Button(props: ButtonProps) {
  const propsWithDefault = {
    ...defaultButtonProps,
    ...props,
  };

  const btnTailwindClass = buttonStylesBuilder(defaultButtonProps.size, defaultButtonProps.colorScheme, defaultButtonProps.outline)

  const onClickHandler = () => {
    if (!props.execute) return;
    props.execute();
  };

  if (props.asLink) {
    return (
      <Link href={props.href ? props.href : '#'}>
        <button
          className={btnTailwindClass}
          type={propsWithDefault.type}
          disabled={propsWithDefault.disabled}
          onClick={onClickHandler}
        >{defaultButtonProps.children}</button>
      </Link>
    );
  }

  return (
    <button
      className={btnTailwindClass}
      type={propsWithDefault.type}
      disabled={propsWithDefault.disabled}
      onClick={onClickHandler}
    >{defaultButtonProps.children}</button>
  );
}
