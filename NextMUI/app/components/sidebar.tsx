'use client';

import { Drawer, Stack, Box, ListItemText } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useLayout from '@/hooks/useLayout';
import Image from 'next/image';
import Divider from '@mui/material/Divider';
import SearchButton from './searchButton';
import LocalLibraryRoundedIcon from '@mui/icons-material/LocalLibraryRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import RouteRoundedIcon from '@mui/icons-material/RouteRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';

export const DRAWER_WIDTH = 240;

const isActive = (currentPath: string, thisLinkPath: string) =>
  currentPath.toLowerCase() === thisLinkPath.toLowerCase();

const navListItems = (path: string, iconProps: { color: string }) => [
  {
    name: 'Home',
    href: '/',
    icon: <HomeRoundedIcon sx={{ color: iconProps.color }} />,
    active: isActive(path, '/'),
  },
  {
    name: 'Courses',
    href: '/course',
    icon: <LocalLibraryRoundedIcon sx={{ color: iconProps.color }} />,
    active: isActive(path, '/course'),
  },
  {
    name: 'Resources',
    href: '/resource',
    icon: <Inventory2RoundedIcon sx={{ color: iconProps.color }} />,
    active: isActive(path, '/resource'),
  },
  {
    name: 'Learning paths',
    href: '/roadmap',
    icon: <RouteRoundedIcon sx={{ color: iconProps.color }} />,
    active: isActive(path, '/roadmap'),
  },
  {
    name: 'About',
    href: '/about',
    icon: <InfoRoundedIcon sx={{ color: iconProps.color }} />,
    active: isActive(path, '/about'),
  },
];

const NavList = () => {
  const pathname = usePathname();
  console.log(pathname);
  const propsNavIcons = { color: '#66bb6a' };
  const navItems = navListItems(pathname, propsNavIcons);

  return (
    <Box sx={{ width: '100%' }}>
      <List>
        {navItems.map((item, k) => {
          return (
            <Link key={k} href={item.href} style={{ textDecoration: 'none' }}>
              <ListItem disablePadding>
                <ListItemButton selected={item.active}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText sx={{ color: '#455a64' }} primary={item.name} />
                </ListItemButton>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Box>
  );
};

const StyledHeaderContent = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 10,
  paddingRight: 10,
  gap: 10,
});

export default function Sidebar() {
  const { sidebarOpen } = useLayout();

  return (
    <Drawer
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,

        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
        },
      }}
      variant='persistent'
      anchor='left'
      open={sidebarOpen}
    >
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
      <SearchButton />
      <NavList />
    </Drawer>
  );
}
