import { Content, Footer, Header, Sidebar } from '@/components';
import { Box, CssBaseline } from '@mui/material';
import type { FC, ReactNode } from 'react';
import { useState } from 'react';

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const [sideBarOpened, setSideBarOpened] = useState(true);

  const toggleSidebar = () => {
    setSideBarOpened((prevOpen) => !prevOpen);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <Header sideBarOpened={sideBarOpened} toggleSidebar={toggleSidebar} />
      {/* 58 and 64 px - the <Toolbar> heights, TODO FIX: add dynamic getting height  */}
      <Box sx={{ display: 'flex',  flexGrow: 1, pt: '58px', pb: '64px' }}>
        <Sidebar sideBarOpened={sideBarOpened} />
        <Content sideBarOpened={sideBarOpened}>{children}</Content>
        <Footer />
      </Box>
    </Box>
  );
};
