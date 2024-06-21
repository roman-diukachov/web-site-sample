import { codeRanges } from '@/constants';
import { getTagTitles } from '@/utils';
import SellIcon from '@mui/icons-material/Sell';
import { Box, Chip } from '@mui/material';
import type { FC } from 'react';

interface Props {
  codes: string[];
}

export const TimelineTagsList: FC<Props> = ({ codes }) => {
  const tags = getTagTitles(codes, codeRanges).filter(Boolean);

  return (
    <Box className="d-flex f-row" sx={{mt: 2}} >
      <SellIcon sx={{ alignSelf: 'center'}} />
      {tags.map((tag, index) => (
        <Chip label={tag} key={index} sx={{ml:1}} color='primary'/>
      ))}
    </Box>
  );
};
