import { AppBar, Toolbar, Typography } from '@mui/material';
import type { FC } from 'react';

export const Footer: FC = () => (
  <AppBar component="footer" position="fixed" sx={{ top: 'auto', bottom: 0, left: 0 }}>
    <Toolbar>
      <Typography
        variant="h6"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        © 2024 Footer
      </Typography>
    </Toolbar>
  </AppBar>
);
