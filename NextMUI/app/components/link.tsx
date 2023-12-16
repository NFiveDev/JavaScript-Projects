import { Box, Button, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

export function BasicLink(props: {
  href: string;
  label: string;
  withArrow: boolean;
}) {
  return (
    <Link href={props.href} style={{textDecoration: 'none'}}>
      <Stack direction={'row'} gap={1}>
        <Typography color={'#2196f3'} fontWeight={600}>{props.label}</Typography>
        {props.withArrow === true && <ArrowForwardRoundedIcon sx={{color: '#2196f3'}} />}
      </Stack>
    </Link>
  );
}


export function LinkButton(props: {
  href: string,
  buttonText: string,
  color: 'info' | 'secondary',
  btnVariant: 'contained' | 'outlined',
  size: 'small' | 'medium' | 'large'
}) {
  return (
    <Link href={props.href}>
      <Button variant={props.btnVariant} color={props.color} size={props.size}>
        {props.buttonText}
      </Button>
    </Link>
  )
}
