import { SIDEBAR_WIDTH } from '@/constants';
import BadgeIcon from '@mui/icons-material/Badge';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import PersonIcon from '@mui/icons-material/Person';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText as MuiListItemText,
  styled,
} from '@mui/material';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  sideBarOpened: boolean;
  toggleSidebar: () => void;
}

export const Sidebar: FC<Props> = ({ sideBarOpened, toggleSidebar }) => (
  <Drawer
    sx={{
      width: SIDEBAR_WIDTH,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: SIDEBAR_WIDTH,
        boxSizing: 'border-box',
      },
    }}
    variant="persistent"
    anchor="left"
    open={sideBarOpened}
  >
    <DrawerHeader>
      <IconButton onClick={toggleSidebar}>
        <MenuOpenIcon />
      </IconButton>
    </DrawerHeader>
    <Divider />
    <List>
      <Link to="/">
        <ListItemButton>
          <ListItemIcon>
            <BadgeIcon />
          </ListItemIcon>
          <ListItemText primary="Employees" />
        </ListItemButton>
      </Link>
      <Link to="/patients">
        <ListItemButton>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Patients" />
        </ListItemButton>
      </Link>
    </List>
  </Drawer>
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const ListItemText = styled(MuiListItemText)(({ theme }) => ({
  // @ts-ignore TODO FIX: choose what is better - pass theme to the <ListItemText> or create separate interface here
  color: theme.listItemText.default,
}));
