'use client'

import { Drawer, Stack } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useLayout from '@/hooks/useLayout';
import Image from 'next/image';
import Divider from '@mui/material/Divider';
import SearchButton from './searchButton';

export const DRAWER_WIDTH = 240;

const NavListItems = () => {
  return (
    <List>
      <ListItem>
        <ListItemButton>

        </ListItemButton>
      </ListItem>
    </List>

  );
};

const SidebarContentWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  minWidth: '100%'
});

const StyledHeaderContent = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingTop: 10,
  paddingBottom: 10,
  gap: 10
});

export default function Sidebar() {
  const { sidebarOpen } = useLayout();

  return (
    <Drawer sx={{
      width: DRAWER_WIDTH,
      flexShrink: 0,

      '& .MuiDrawer-paper': {
        width: DRAWER_WIDTH,
        boxSizing: 'border-box',
        padding: '1rem 1rem 1rem 1rem',
      },
    }}
      variant='persistent'
      anchor='left'
      open={sidebarOpen}>
      <StyledHeaderContent>
        <Image
          width={40}
          height={40}
          alt='brand'
          src={'/logo.svg'}
          style={{ display: 'inline-block' }}
        />
        <Typography variant='h6'>Dev Academy</Typography>
      </StyledHeaderContent>
      <Divider />
        <Stack>
          <SearchButton />
          <NavListItems />
        </Stack>

    </Drawer>
  );
}
