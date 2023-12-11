export type formState = {
  isLoading: boolean;
  isDisabled: boolean;
  errorMsg: string;
  hasError: () => boolean;
  fieldValues: Map<string, object>
}

export type FormProps = {
  actions: FormActionProps[];
  fields: FormField[];
  action: string;
  method: 'GET' | 'POST';
};

export type formController = {
  formIsDisabled: boolean;
  formIsLoading: boolean;
}