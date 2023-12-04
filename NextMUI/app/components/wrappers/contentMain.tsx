'use client'

import { DRAWER_WIDTH } from "../sidebar";
import { styled, useTheme } from '@mui/material/styles';
import * as React from 'react';
import useLayout from "@/hooks/useLayout";

const StyledMain = styled('div', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ open, theme }) => {
  return {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${DRAWER_WIDTH}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }
});

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${DRAWER_WIDTH}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

export default function ContentMain(props: { children: React.ReactNode }) {
  const theme = useTheme();
  const { sidebarOpen } = useLayout();

  return <Main open={sidebarOpen}>{props.children}</Main>
}

