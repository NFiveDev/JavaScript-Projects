import { FormContext, FormDispatchContext, formAction, formActionKind } from "@/context/formContextProvider"
import { useContext } from "react"

export default function useForm() {
  const dispatch = useContext(FormDispatchContext);
  const formState = useContext(FormContext);

  if(!dispatch || !formState) throw new Error("You cannot use useForm hook outside formContextProvider.tsx")

  const registerFieldValue = (value: {key: string, value: object}) => {
    const action: formAction = {
      typeOfAction: formActionKind.SET_FIELD_VALUE,
      actionValue: value
    } 

    dispatch(action)
  }


  return {
    registerFieldValue,
    formState
  }
}