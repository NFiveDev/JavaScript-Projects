import type { Metadata } from 'next'
import './globals.css'
import { Box, Container, Stack } from '@mui/material'
import ThemeRegistry from '@/components/theme/themeRegistry'
import Navbar from '@/components/navbar'
import Sidebar, { DRAWER_WIDTH } from '@/components/sidebar'
import ContentMain from '@/components/wrappers/contentMain'
import Providers from './context/providers'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <Providers>
          <body>
            <Box sx={{
              display: 'flex'
            }}>
              <Sidebar />
              <ContentMain>
                <Navbar />
                {children}
              </ContentMain>
            </Box>
          </body>
        </Providers>
      </ThemeRegistry>
    </html>
  )
}
