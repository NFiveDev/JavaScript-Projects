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
import { ImageOverlay } from '@/components/overlays';
import { SignUpForm } from '@/components/forms/form';
export default function Home() {
  const sectionBottomSpace = 50;

  return (
    <main style={{ marginBottom: sectionBottomSpace }}>
      <section className={styles.background}>
        <Container maxWidth='lg'>
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
              <Image src={HomeSvg} width={600} alt='coding' />
            </div>
          </Stack>
        </Container>
      </section>

      <section className={styles.padding_top_bot}>
        <div>
          <Container maxWidth={'lg'}>
            <Grid
              container
              spacing={5}
              direction={'row'}
              sx={{ margin: 0, justifyContent: 'center' }}
            >
              {features?.map((item, k) => {
                return (
                  <Grid item key={k} xs={8} lg={6}>
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
        </div>
      </section>

      <section style={{ marginTop: 5, marginBottom: 5 }}>
        <div style={{ position: 'relative' }}>
          <Image
            src='/home-second_banner.jpg'
            alt='learning to code'
            objectFit='cover'
            fill
            objectPosition='center'
            style={{
              zIndex: 0,
            }}
          />
          <ImageOverlay color='rgba(30, 60, 90, 0.7)'/>
          
          <Container sx={{ padding: 20, position: 'relative' }}>
            <div style={{}}>
              <Stack>
                <Typography variant='h3' color='white'>
                  Get a personalized Learning Experience
                </Typography>
                <SignUpForm />
              </Stack>
            </div>
          </Container>
        </div>
      </section>
    </main>
  );
}
