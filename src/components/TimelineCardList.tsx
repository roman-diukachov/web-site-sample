import { Link, ListItemButton, Paper, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import type { FC } from 'react';
import { FixedSizeList } from 'react-window';

interface Props {
  codes: string[];
}

export const TimelineCardList: FC<Props> = ({ codes }) => (
  <Box>
    <Typography variant="body2">Codes:</Typography>
    <Box sx={{ width: 200, height: 110 }}>
      <Paper elevation={2}>
        <FixedSizeList width={200} height={110} itemSize={30} itemCount={codes.length} overscanCount={5}>
          {({ index, style }) => (
            <ListItem style={style} key={index} component="div" disablePadding>
              <ListItemButton>
                <Link
                  href={`https://www.aapc.com/codes/cpt-codes/${codes[index]}`}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                >
                  {codes[index]}
                </Link>
              </ListItemButton>
            </ListItem>
          )}
        </FixedSizeList>
      </Paper>
    </Box>
  </Box>
);
