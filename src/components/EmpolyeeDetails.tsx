import { Accordion } from '@/components';
import type { Employer } from '@/types';
import { Box, Typography } from '@mui/material';
import type { FC } from 'react';

interface Props {
  selectedRow: Employer;
}

export const EmployeeDetails: FC<Props> = ({ selectedRow }) => (
  <Box sx={{ mb: 2 }} className = "details">
    <Typography gutterBottom variant="h5" className='detail-title'>
      Employee Nº{selectedRow.id}
    </Typography>
    <Accordion selectedRow={selectedRow} />
  </Box>
);
