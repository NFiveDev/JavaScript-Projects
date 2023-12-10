import CustomTextField from './fields/textField';
import { FormField } from './fields/field';
import { EmailField } from './fields/emailField';
import { formController } from './form-types';

export function FieldProvider(configurations: FormField[], controller: undefined | formController) {
  let formConfiguration = [...configurations];
  const fields: JSX.Element[] = [];

  function SetController(formController: formController) {
    const controlledFormConfiguration = formConfiguration.map((field) => {
      return {
        ...field,
        controller: formController
      }
    })

    formConfiguration = controlledFormConfiguration; 
  }

  function Build() {
    if(controller != undefined) SetController(controller)

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
