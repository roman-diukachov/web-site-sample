import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import type { IconButtonProps } from '@mui/material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import type { FC } from 'react';

interface Props {
  sideBarOpened: boolean;
  toggleSidebar: () => void;
}

export const Header: FC<Props> = ({ sideBarOpened, toggleSidebar }) => (
  <AppBar position="static">
    <Toolbar>
      <GeneralIconButton aria-label="toggle sidebar button" onClick={toggleSidebar}>
        {sideBarOpened ? <MenuOpenIcon /> : <MenuIcon />}
      </GeneralIconButton>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Bluespine.io
      </Typography>
      <GeneralIconButton aria-label="logout button">
        <LogoutIcon />
      </GeneralIconButton>
    </Toolbar>
  </AppBar>
);

// for avoid duplicating IconButton component parameters
const GeneralIconButton: FC<IconButtonProps> = (props) => <IconButton color="inherit" {...props} />;
