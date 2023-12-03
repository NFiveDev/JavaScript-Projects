import Image from 'next/image';
import styles from './page.module.css';
import Container from '@mui/material/Container';
import { Box, Grid, Stack } from '@mui/material';
import HomeSvg from '../public/hero-image 1.svg';
import Button from '@mui/material/Button';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import Typography from '@mui/material/Typography';
import { FeatureCard, features } from '@/components/cards/feature';

export default function Home() {
  return (
    <main>
      <section className={styles.background}>
        <Container maxWidth='xl'>
          <Stack
            justifyContent={{ xs: 'center' }}
            direction={{ xs: 'column', md: 'row' }}
          >
            <div className={styles.hero_content_wrapper}>
              <Typography
                fontWeight={600}
                variant='h2'
                component={'h1'}
                mb={1}
                color={'white'}
              >
                Begin your coding adventure with us!
              </Typography>
              <Typography
                variant='h6'
                component={'h2'}
                mb={3}
                color={'#e0e0e0'}
              >
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
                  color='secondary'
                  href='/course'
                  endIcon={<ArrowForwardRoundedIcon />}
                  disableElevation
                >
                  Explore
                </Button>
                <Button
                  size='large'
                  variant='outlined'
                  color='secondary'
                  href='/course'
                  endIcon={<PlayCircleOutlineRoundedIcon />}
                  disableElevation
                >
                  Introduction
                </Button>
              </Box>
            </div>
            <div>
              <Image
                src={HomeSvg}
                width={600}
                alt='coding'
              />
            </div>
          </Stack>
        </Container>
      </section>

      <section>
        <Container maxWidth={'lg'}>
          <Grid container spacing={4}>
            {features?.map((item, k) => {
              return (
                <Grid key={k} xs={8} lg={6} border={'1px solid black'}>
                  <FeatureCard
                    title={item.title}
                    icon={item.icon}
                    description={item.description}
                    link={item.link}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </section>
    </main>
  );
}
