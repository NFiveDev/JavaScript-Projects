import CustomTextField from './fields/textField';
import { FormField } from './fields/field';
import { EmailField } from './fields/emailField';

export function FieldProvider(configurations: FormField[]) {
  const fields: JSX.Element[] = [];

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
            />
          );
          break;
        default:
          fields.push(
            <CustomTextField
              id={f.id}
              variant='standard'
              label={f.label}
              fieldType='text'
            />
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
