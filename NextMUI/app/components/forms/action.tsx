import { Stack, Box } from '@mui/material';
import Button from '@mui/material/Button';

export type FormActionProps = {
  execute: () => void;
  disabled?: boolean;
  label: string;
  isPrimary?: boolean;
};

export function FormAction(props: FormActionProps) {
  return (
    <>
      <Button
        variant={props.isPrimary ? 'contained' : 'outlined'}
        disabled={props.disabled ? true : false}
        onClick={props.execute}
      >
        {props.label}
      </Button>
    </>
  );
}

export function ActionPanel(props: {actions: FormActionProps[], panelPosition: 'left' | 'right' | 'center' | undefined}) {
  return (
    <Box justifyContent={props.panelPosition} width={'100%'}>
      <Stack direction={'row'}>
        {
            props.actions.map((action, index) => {
                return <FormAction key={'action-' + index} label={action.label} execute={action.execute} isPrimary={action.isPrimary} disabled={action.disabled}/>
            })
        }
      </Stack>
    </Box>
  );
}
