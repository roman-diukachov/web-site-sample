import { SIDEBAR_WIDTH } from '@/constants';
import BadgeIcon from '@mui/icons-material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText as MuiListItemText, styled } from '@mui/material';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  sideBarOpened: boolean;
}

export const Sidebar: FC<Props> = ({ sideBarOpened }) => (
  <Drawer
    variant="persistent"
    className="sidebar"
    anchor="left"
    open={sideBarOpened}
  >
    <List sx={{ paddingTop: 0 }}>
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

const ListItemText = styled(MuiListItemText)(({ theme }) => ({
  // @ts-ignore TODO FIX: choose what is better - pass theme to the <ListItemText> or create separate interface here
  color: theme.listItemText.default,
}));
