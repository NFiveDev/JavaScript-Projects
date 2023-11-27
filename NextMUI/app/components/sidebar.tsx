'use client'

import { Drawer } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useLayoutContext } from '@/app/context/layoutContextProvider';
import useLayout from '@/hooks/useLayout';

export const DRAWER_WIDTH = 240;

const NavListItem = () => {
  return (
    <ListItem>
      <ListItemButton></ListItemButton>
    </ListItem>
  );
};

const NavigationList = () => {
  return (
    <nav>
      <List></List>
    </nav>
  );
};

const SidebarContentWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  paddingLeft: '1rem',
  paddingRight: '1rem'
});

const StyledHeaderContent = styled('div')({

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
      },
    }}
      variant='persistent'
      anchor='left'
      open={sidebarOpen}>
      <StyledHeaderContent>
        <Typography variant='h5'>Dev Academy</Typography>
      </StyledHeaderContent>
      <SidebarContentWrapper>

      </SidebarContentWrapper>
    </Drawer>
  );
}
