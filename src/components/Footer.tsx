import { AppBar, Toolbar, Typography } from '@mui/material';
import type { FC } from 'react';

export const Footer: FC = () => (
  <AppBar component="footer" position="static">
    <Toolbar
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Typography>© 2024 Footer</Typography>
    </Toolbar>
  </AppBar>
);
