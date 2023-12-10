import TextField from '@mui/material/TextField';
import { IField } from '../field';

interface CustomTextFieldProps extends IField{
    variant: 'standard' | 'outlined';    
}

export default function CustomTextField(props: CustomTextFieldProps){
    return <TextField variant={props.variant} label={props.label} />
}