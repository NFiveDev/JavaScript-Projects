import { FormProps } from '../form-types';

const SIGN_UP_FORM_CONFIG: FormProps = {
  action: '/signup',
  method: 'POST',
  fields: [
    {
      id: 'username',
      label: 'Username',
      fieldType: 'text',
      placeholder: 'Enter a unique account name...',
    },
    {
      id: 'email',
      label: 'Email',
      fieldType: 'email',
      placeholder: 'Type your email address...',
    },
    {
      id: 'password',
      label: 'Password',
      fieldType: 'password',
      placeholder: 'Enter a secure password...',
    },
  ],
  actions: [
    {
      label: 'Sign Up!',
      isPrimary: true,
      color: 'success',
      
    },
  ]
}


export default SIGN_UP_FORM_CONFIG;
