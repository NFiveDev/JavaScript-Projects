import CustomTextField from "./fields/TextField";


export interface IField {
    id: string,
    label: string,
    fieldType: 'email' | 'text' | 'number' | 'password',
    validator?: () => boolean
}

export function FieldProvider(configurations: IField[]) {
    const fields : JSX.Element[] = [];

    function Build() {
        configurations.forEach(f => {
            switch(f.fieldType) {
                case 'text':
                    fields.push(<CustomTextField id={f.id} variant='standard' label={f.label} fieldType='text' />);
                    break;
                case 'email':
                    fields.push(<CustomTextField id={f.id}  variant='standard' label={f.label} fieldType='email' />);
                    break;
                case 'password':
                    fields.push(<CustomTextField id={f.id}  variant='standard' label={f.label} fieldType='password' />);
                    break;
                default:
                    fields.push(<CustomTextField id={f.id}  variant='standard' label={f.label} fieldType='text' />);
                    break;
            }
        });
        
        return fields;
    }
    
    return {
        GetFields: Build
    }
}