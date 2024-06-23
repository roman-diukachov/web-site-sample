import { ListItemButton, Paper, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import type { FC } from 'react';
import { FixedSizeList } from 'react-window';

interface Props {
  codes: string[];
}

export const TimelineCardList: FC<Props> = ({ codes }) => (
  <Box>
    <Typography variant="body1" className="text-start">
      Codes:
    </Typography>
    <Box className="codes-box">
      <Paper elevation={2}>
        <FixedSizeList width={300} height={110} itemSize={35} itemCount={codes.length} overscanCount={5}>
          {({ index, style }) => (
            <ListItem style={style} key={index} component="div" disablePadding>
              <ListItemButton
                component="a"
                className="codes-link"
                key={index}
                href={`https://www.aapc.com/codes/cpt-codes/${codes[index]}`}
              >
                {codes[index]}
              </ListItemButton>
            </ListItem>
          )}
        </FixedSizeList>
      </Paper>
    </Box>
  </Box>
);
