import Image from 'next/image';
import blueprint from '../../public/feature/blueprint.svg';
import stack from '../../public/feature/stack.svg';
import journey from '../../public/feature/journey.svg';
import cogwheel from '../../public/feature/cogwheel.svg';

import { Box, Stack, Typography } from '@mui/material';
import { BasicLink } from '../link';

type featureProps = {
  title: string;
  icon: JSX.Element;
  description: string;
  link: { label?: string; href: string };
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
    link: {
      href: '/about',
      label: '',
    },
  },
  {
    title: 'Real World Projects',
    icon: (
      <Image
        alt='real world projects'
        src={stack}
      />
    ),
    description:
      'Discover the Future of Learning through Interactive Videos and Project-Based Courses.',
    link: {
      href: '/about',
      label: '',
    },
  },
  {
    title: 'Real World Projects',
    icon: (
      <Image
        alt='real world projects'
        src={cogwheel}
      />
    ),
    description:
      'Discover the Future of Learning through Interactive Videos and Project-Based Courses.',
    link: {
      href: '/about',
      label: '',
    },
  },
  {
    title: 'Real World Projects',
    icon: (
      <Image
        alt='real world projects'
        src={journey}
      />
    ),
    description:
      'Discover the Future of Learning through Interactive Videos and Project-Based Courses.',
    link: {
      href: '/about',
      label: '',
    },
  },
];

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
