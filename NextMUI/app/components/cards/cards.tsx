import { Card } from "@mui/material";
import { Box, Stack, Typography } from '@mui/material';
import { BasicLink } from '../link';
import type { featureProps } from "./card";


export function DefaultCard() {
    return (
        <Card>

        </Card>
    )
}

export function IconCard(){

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