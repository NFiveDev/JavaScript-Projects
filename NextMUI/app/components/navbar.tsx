'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import { useLayoutContext } from '@/app/context/layoutContextProvider';
import useLayout from '@/hooks/useLayout';

const StyledToolbar = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 60,
  },
}));

const StyledContentBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center'
}))

const StyledHeader = styled('header')({
  flexGrow: 1
}) 

export default function Navbar() {
  const {sidebarOpen, setSidebarState} = useLayout();

  const oppositeBooleanValue = (input: boolean) => !input; 

  const sidebarHandler = () => {
    setSidebarState(oppositeBooleanValue(sidebarOpen));
  }

  return (
    <StyledHeader sx={{ flexGrow: 1, flexShrink: 0 }}>
      <AppBar position='static'>
        <StyledToolbar>
          <StyledContentBox>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='open drawer'
              sx={{ mr: 2 }}
              onClick={sidebarHandler}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant='h5'
              noWrap
              component='div'
              sx={{ flexGrow: 1, alignSelf: 'center' }}
            >
              MUI
            </Typography>
          </StyledContentBox>

          <Box>
            <IconButton size='large' aria-label='search' color='inherit'>
              <SearchIcon />
            </IconButton>
            <IconButton
              size='large'
              aria-label='display more actions'
              edge='end'
              color='inherit'
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </StyledToolbar>
      </AppBar>
    </StyledHeader>
  );
}
