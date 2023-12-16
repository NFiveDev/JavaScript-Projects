import { Card } from "@mui/material";
import { Box, Stack, Typography } from '@mui/material';
import { BasicLink } from '../link';
import type { featureProps, iconCardProps } from "./card";
import { Spacer } from "../spacer";


export function DefaultCard() {
    return (
        <Card>

        </Card>
    )
}

export function IconCard(props: iconCardProps){

  

  return (
    <Box padding={3} sx={props.wrapperSxStyle}>
      <Stack alignItems={'center'} direction={'column'} textAlign={'center'}>
        {props.icon}
        <Spacer margin={0.2}/>
        <Typography variant="h6">{props.title}</Typography>
        <Typography variant="subtitle1">{props.text}</Typography>
      </Stack>
    </Box>
  )
}


export function FeatureCard(props: featureProps) {
    return (
      <Box
        paddingRight={2}
        paddingLeft={2}
        maxWidth={360}
      >
        <Stack>
          <Box marginBottom={2}>{props.icon}</Box>
          <Typography
            variant='h4'
            fontWeight={600}
            paddingBottom={1}
          >
            {props.title}
          </Typography>
          <Typography paddingBottom={1} fontWeight={500} color={'#616161'}>{props.description}</Typography>
          <BasicLink
            href={props.link.href}
            label='Learn more'
            withArrow={true}
          ></BasicLink>
        </Stack>
      </Box>
    );
  }