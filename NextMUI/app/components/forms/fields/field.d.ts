export interface IField {
  id: string;
  label: string;
  fieldType: 'email' | 'text' | 'number' | 'password';
  validator?: () => boolean;
}

export interface TextFieldProps extends IField {
  variant: 'standard' | 'outlined';
}

export interface EmailFieldProps extends IField {}
