import { SIDEBAR_WIDTH } from '@/constants';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import type { IconButtonProps } from '@mui/material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import type { FC } from 'react';

interface Props {
  sideBarOpened: boolean;
  toggleSidebar: () => void;
}

export const TopBar: FC<Props> = ({ sideBarOpened, toggleSidebar }) => (
  <AppBar position="fixed">
    <Toolbar>
      <GeneralIconButton
        aria-label="toggle sidebar button"
        onClick={toggleSidebar}
        sx={{ ...(sideBarOpened && { display: 'none' }) }}
      >
        <MenuIcon />
      </GeneralIconButton>
       f{/*4px for pretty UI*/}
      <Typography variant="h6" sx={{ flexGrow: 1, ...(sideBarOpened && { marginLeft: `${SIDEBAR_WIDTH + 4}px` }) }}>
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
