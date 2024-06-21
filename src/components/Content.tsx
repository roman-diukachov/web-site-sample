import { Box } from '@mui/material';
import type { FC, ReactNode } from 'react';

interface Props {
  sideBarOpened: boolean;
  children: ReactNode;
}

export const Content: FC<Props> = ({ sideBarOpened, children }) => (
  <Box component="div" className={`content${sideBarOpened ? ' is-sidebar-open' : ''}`}>
    {children}
  </Box>
);
