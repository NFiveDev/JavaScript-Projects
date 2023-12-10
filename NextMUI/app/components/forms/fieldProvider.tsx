import CustomTextField from './fields/textField';
import { FormField } from './fields/field';
import { EmailField } from './fields/emailField';

export function FieldProvider(configurations: FormField[]) {
  let formConfiguration = [...configurations];
  const fields: JSX.Element[] = [];

  function SetController(formController: any) {
    const controlledFormConfiguration = formConfiguration.map((field) => {
      return {
        ...field,
        controller: formController
      }
    })

    formConfiguration = controlledFormConfiguration; 
  }

  function Build() {
    formConfiguration.forEach((f) => {
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
    WithController: SetController
  };
}
