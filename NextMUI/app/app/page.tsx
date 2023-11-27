import Image from 'next/image'
import styles from './page.module.css'
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';


export default function Home() {
  return (
    <main className={styles.background} >
        <Container maxWidth="xl">
          <div className={styles.hero}>
          <h1>home</h1>
          </div>
          

        </Container>

    </main>
  )
}
