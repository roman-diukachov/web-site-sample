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
    <Box className="wrapper">
      <CssBaseline />
      <Header sideBarOpened={sideBarOpened} toggleSidebar={toggleSidebar} />
      {/* 64 px - the <Toolbar> heights, TODO FIX: add dynamic getting height  */}
      <Box component="main" className="main">
        <Sidebar sideBarOpened={sideBarOpened} />
        <Content sideBarOpened={sideBarOpened}>{children}</Content>
      </Box>
      <Footer />
    </Box>
  );
};
