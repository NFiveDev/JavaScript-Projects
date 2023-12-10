export type formState = {
  isloading: boolean;
  isDisabled: boolean;
  errorMsg: string;
  hasError: () => boolean;
}

export type DynamicFormProps = {
  actions: FormActionProps[];
  fields: FormField[];
  action: string;
  method: 'GET' | 'POST';
};

export enum formActionKind {
  NOT_LOADING,
  IS_LOADING,
  ENABLE,
  DISABLE
}