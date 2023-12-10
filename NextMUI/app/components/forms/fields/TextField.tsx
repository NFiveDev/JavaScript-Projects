import TextField from '@mui/material/TextField';
import { TextFieldProps } from './field';

export default function CustomTextField(props: TextFieldProps) {
    return <TextField fullWidth placeholder={props.placeholder} variant={props.variant} label={props.label} />
}