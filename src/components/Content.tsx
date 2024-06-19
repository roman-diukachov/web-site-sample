import { SIDEBAR_WIDTH } from '@/constants';
import { Box } from '@mui/material';
import type { FC, ReactNode } from 'react';

interface Props {
  sideBarOpened: boolean;
  children: ReactNode;
}

const ONE_SIDE_PADDING = 24;

export const Content: FC<Props> = ({ sideBarOpened, children }) => (
  <Box
    component="main"
    sx={{
      pl: !sideBarOpened ? `${ONE_SIDE_PADDING}px` : `${SIDEBAR_WIDTH + ONE_SIDE_PADDING}px`,
      pr: `${ONE_SIDE_PADDING}px`,
      width: '100vw',
      minHeight: '1vw',
      transition: 'all .2s',
    }}
  >
    {children}
  </Box>
);
