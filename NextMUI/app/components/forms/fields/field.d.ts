import type { formController } from "../form-types";

interface Field {
  id: string;
  label: string;
  validator?: () => boolean;
  controller?: formController
}


interface InputField extends Field {
  fieldType: 'email' | 'text' | 'number' | 'password';
  placeholder?: string;
}

interface SelectField extends Field {
  fieldType: 'select';
  options: string[];
}

export interface TextFieldProps extends InputField {
  variant: 'standard' | 'outlined';
}

export interface EmailFieldProps extends TextFieldProps {}

export type FormField = SelectField | InputField;