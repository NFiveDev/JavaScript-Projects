import Image from 'next/image';
import styles from './page.module.css';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { Box, Stack } from '@mui/material';
import HomeSvg from '../public/hero-image 1.svg';
import Button from '@mui/material/Button';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <main className={styles.background}>
      <Container maxWidth='xl'>
        <Stack direction={{ xs: 'column', md: 'row' }}>
          <div className={styles.hero_content_wrapper}>
            <Typography variant='h2' component={'h1'} mb={1}>
              Begin your coding adventure with us!
            </Typography>
            <Typography variant='h5' component={'h2'} mb={3}>
              Explore coding effortlessly with our project-based learning
              platform for aspiring programmers
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: '1rem',
              }}
            >
              <Button
                size='large'
                variant='contained'
                color='success'
                href='/course'
                endIcon={<ArrowForwardRoundedIcon />}
                disableElevation
              >
                Explore
              </Button>
              <Button
                size='large'
                variant='outlined'
                color='success'
                href='/course'
                endIcon={<PlayCircleOutlineRoundedIcon />}
                disableElevation
              >
                Introduction
              </Button>
            </Box>
          </div>
          <div>
            <Image src={HomeSvg} width={700} alt='coding' />
          </div>
        </Stack>
      </Container>
    </main>
  );
}
