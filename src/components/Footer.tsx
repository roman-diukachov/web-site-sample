import { AppBar, Toolbar, Typography } from '@mui/material';
import type { FC } from 'react';

export const Footer: FC = () => (
  <AppBar component="footer" position="fixed" sx={{ top: 'auto', bottom: 0, left: 0 }}>
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
