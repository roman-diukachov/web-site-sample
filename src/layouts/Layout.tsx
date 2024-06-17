import { Content, Sidebar } from '@/components';
import { TopBar } from '@/components/TopBar';
import type { FC, ReactNode } from 'react';
import { useState } from 'react';

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const [sideBarOpened, setSideBarOpened] = useState(true);

  const toggleSidebar = () => {
    setSideBarOpened((prevOpen) => !prevOpen);
  };

  return (
    <>
      <TopBar sideBarOpened={sideBarOpened} toggleSidebar={toggleSidebar} />
      <Sidebar sideBarOpened={sideBarOpened} toggleSidebar={toggleSidebar} />
      <Content sideBarOpened={sideBarOpened}>{children}</Content>
    </>
  );
};
