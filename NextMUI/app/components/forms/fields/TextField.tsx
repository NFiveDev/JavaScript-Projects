import TextField from '@mui/material/TextField';
import { TextFieldProps } from './field';

export default function TextFieldWrapper(props: TextFieldProps) {
    return <TextField variant={props.variant} label={props.label} />
}