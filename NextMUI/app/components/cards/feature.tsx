import Image from 'next/image';
import blueprint from '../../public/feature/blueprint.svg';
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
];

export function FeatureCard(props: featureProps) {
  return (
    <Box maxWidth={360}>
      <Stack spacing={1}>
      <Box>{props.icon}</Box>
        <Typography
          variant='h4'
          fontWeight={600}
        >
          {props.title}
        </Typography>
        <Typography>{props.description}</Typography>
        <BasicLink
          href={props.link.href}
          label='Learn more'
          withArrow={true}
        ></BasicLink>
      </Stack>
    </Box>
  );
}
