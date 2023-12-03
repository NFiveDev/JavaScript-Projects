import Image from 'next/image';
import blueprint from '../../public/feature/blueprint.svg';
import { Box, Stack, Typography } from '@mui/material';
import { BasicLink } from '../link';

type featureProps = {
  title: string;
  icon: JSX.Element;
  description: string;
  link: string;
};

export const features: featureProps[] = [
  {
    title: 'Real World Projects',
    icon: (
      <Image
        alt='real world projects'
        src={blueprint}
      />
    ),
    description:
      'Discover the Future of Learning through Interactive Videos and Project-Based Courses.',
    link: '/about',
  },
];

export function FeatureCard(props: featureProps) {
  return (
    <Box>
      <Stack>
        <Typography variant='subtitle1'>{props.title}</Typography>
        <Box>{props.icon}</Box>
        <Typography>{props.description}</Typography>
        <BasicLink
          href={props.link}
          label='Learn more'
          withArrow={true}
        ></BasicLink>
      </Stack>
    </Box>
  );
}
