import { Box, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

export function BasicLink(props: {
  href: string;
  label: string;
  withArrow: boolean;
}) {
  return (
    <Link href={props.href}>
      <Stack direction={'row'}>
        <Typography>{props.label}</Typography>
        {props.withArrow === true && <ArrowForwardRoundedIcon />}
      </Stack>
    </Link>
  );
}
