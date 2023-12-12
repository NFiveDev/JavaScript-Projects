import CustomTextField from './fields/textField';
import { FormField } from './fields/field';
import { EmailField } from './fields/emailField';
import { formController, formState } from './form-types';

export function FieldProvider(configurations: FormField[]) {
  // let formConfiguration = [...configurations];
  const fields: JSX.Element[] = [];

  // function addFormState(formState: formState) {
  //   return formConfiguration.map((field) => {
  //     return {
  //       ...field,
  //       formStatus: formState
  //     }
  //   })
  // }

  function Build() {
    configurations.forEach((f) => {
      switch (f.fieldType) {
        case 'text':
          fields.push(
            <CustomTextField
              id={f.id}
              variant='standard'
              label={f.label}
              fieldType='text'
              placeholder={f.placeholder}
            />
          );
          break;
        case 'email':
          fields.push(
            <EmailField
              id={f.id}
              variant='standard'
              label={f.label}
              fieldType='email'
              placeholder={f.placeholder}
            />
          );
          break;
        case 'password':
          fields.push(
            <CustomTextField
              id={f.id}
              variant='standard'
              label={f.label}
              fieldType='password'
              placeholder={f.placeholder}
            />
          );
          break;
        default:
          fields.push(
            <div>
              <p>Cannot Resolve Field</p>
            </div>
          );
          break;
      }
    });

    return fields;
  }

  return {
    GetFields: Build,
  };
}
