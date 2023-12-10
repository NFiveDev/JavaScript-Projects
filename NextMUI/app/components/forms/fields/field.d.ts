interface InputField {
  id: string;
  fieldType: 'email' | 'text' | 'number' | 'password';
  label: string;
  validator?: () => boolean;
  placeholder?: string;
}

interface SelectField {
  id: string;
  fieldType: 'select';
  label: string;
  options: string[];
  validator?: () => boolean;
}

export interface TextFieldProps extends InputField {
  variant: 'standard' | 'outlined';
}

export interface EmailFieldProps extends TextFieldProps {}

export type FormField = SelectField | InputField;