import { formState } from "@/components/forms/form-types";
import { Dispatch, ReactNode, createContext, useReducer } from "react";

const FormContext = createContext<formState | null>(null)
const FormDispatchContext = createContext<Dispatch<formAction> | null>(null)


const initFormState: formState = {
  isLoading: false,
  isDisabled: false,
  errorMsg: '',
  hasError: () => initFormState.errorMsg.length > 0,
  fieldValues: new Map<string, object>(),
};

type formAction = {
  typeOfAction: formActionKind;
  actionValue?: { key: string; value: object };
};

enum formActionKind {
  NOT_LOADING,
  IS_LOADING,
  ENABLE,
  DISABLE,
  SET_FIELD_VALUE,
}

function formReducer(state: formState, action: formAction) {
  switch (action.typeOfAction) {
    case formActionKind.DISABLE:
      return {
        ...state,
        isDisabled: true,
      };
    case formActionKind.ENABLE:
      return {
        ...state,
        isDisabled: false,
      };
    case formActionKind.IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case formActionKind.NOT_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case formActionKind.SET_FIELD_VALUE:
      const newValues = new Map(state.fieldValues);
      if(action.actionValue) newValues.set(action.actionValue.key, action.actionValue.value)
      return {
        ...state,
        fieldValues: newValues
      }
    default:
      return state;
  }
}

export function FormContextProvider({children} : {children: ReactNode}) {
  const [formState, dispatch] = useReducer(formReducer, initFormState);

  return (
    <FormContext.Provider value={formState}>
      <FormDispatchContext.Provider value={dispatch}>
        {children}
      </FormDispatchContext.Provider>
    </FormContext.Provider>
  )
}