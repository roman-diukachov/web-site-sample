import { Accordion } from '@/components';
import type { Patient } from '@/types';
import { Box, Typography } from '@mui/material';
import type { FC } from 'react';

interface Props {
  selectedRow: Patient;
}

export const PatientDetails: FC<Props> = ({ selectedRow }) => (
  <Box sx={{mb: 2}}>
    <Typography gutterBottom variant="h6">
      Patient Nº{selectedRow.id}
    </Typography>

    <Accordion selectedRow={selectedRow} />
  </Box>
);
