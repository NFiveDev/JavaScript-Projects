import Image from 'next/image';
import blueprint from '../../public/feature/blueprint.svg';
import stack from '../../public/feature/stack.svg';
import journey from '../../public/feature/journey.svg';
import cogwheel from '../../public/feature/cogwheel.svg';
import type { featureProps } from './card';

const features: featureProps[] = [
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


export default features;

