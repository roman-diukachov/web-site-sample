import { SIDEBAR_WIDTH } from '@/constants';
import type { FC, ReactNode } from 'react';

interface Props {
  sideBarOpened: boolean;
  children: ReactNode;
}

const ONE_SIDE_PADDING = 24;
const X_PADDING_WITH_SIDEBAR = ONE_SIDE_PADDING + ONE_SIDE_PADDING + SIDEBAR_WIDTH; // left + right + sidebar padding

export const Content: FC<Props> = ({ sideBarOpened, children }) => (
  <main
    style={{
      width: !sideBarOpened ? '100%' : `calc(100% - ${X_PADDING_WITH_SIDEBAR}px)`,
      paddingLeft: !sideBarOpened ? `${ONE_SIDE_PADDING}px` : `${SIDEBAR_WIDTH + ONE_SIDE_PADDING}px`,
      paddingRight: `${ONE_SIDE_PADDING}px`,
    }}
  >
    {children}
  </main>
);
