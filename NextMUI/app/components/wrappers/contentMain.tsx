'use client'

import { useLayoutContext } from "@/app/context/layoutContextProvider";
import { DRAWER_WIDTH } from "../sidebar";
import { styled, useTheme } from '@mui/material/styles';
import * as React from 'react';
import useLayout from "@/hooks/useLayout";

const StyledMain = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
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

export default function ContentMain(props: { children: React.ReactNode }) {
  const theme = useTheme();
  const { sidebarOpen } = useLayout();

  return <StyledMain open={sidebarOpen}>{props.children}</StyledMain>
}

