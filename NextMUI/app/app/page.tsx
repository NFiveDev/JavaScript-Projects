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
              <Image
                src={HomeSvg}
                width={600}
                alt='coding'
              />
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
                  <Grid
                    item
                    key={k}
                    xs={8}
                    lg={6}
                  >
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

      <section
        style={{ paddingTop: 50, marginBottom: 5 }}
      >
        <Container
          maxWidth='xl'
          sx={{ background: 'linear-gradient(#1e88e5, #64b5f6)', borderRadius:10, boxShadow: 3 }}
        >
          <Grid container paddingX={10} paddingY={10}>
            <Grid
              item
              xs={12}
              lg={7}
            >
              <Box sx={{marginY: 'auto'}}>
                <Typography
                  variant='h3'
                  color='white'
                  fontWeight={550}
                >
                  Get a personalized Learning Experience
                </Typography>
                <Typography paddingTop={2} paddingRight={{sx: 0, lg: 20}} variant='h6' color='#b2dfdb'>
                Unlock Your Personalized Learning Journey! Create an account today to tailor your educational experience, access customized content, and embark on a learning adventure designed just for you.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              lg={5}
              sx={{ background: 'white', borderRadius: '10px' }}
              paddingLeft={'1.5rem'}
              paddingRight={'1.5rem'}
              paddingBottom={'1.5rem'}
            >
              <Box>
                <Typography
                  paddingTop={5}
                  marginLeft={'auto'}
                  marginRight={'auto'}
                  variant='h4'
                  fontWeight={500}
                  color={'#1e88e5'}
                  textAlign={'left'}
                >
                  Register as User
                </Typography>
              </Box>
              <Box>
                <SignUpForm />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </main>
  );
}
