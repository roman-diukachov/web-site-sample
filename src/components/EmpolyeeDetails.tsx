import { Accordion } from '@/components';
import type { Employer } from '@/types';
import { Box, Typography } from '@mui/material';
import type { FC } from 'react';

interface Props {
  selectedRow: Employer;
}

export const EmployeeDetails: FC<Props> = ({ selectedRow }) => (
  <Box sx={{ mb: 2 }}>
    <Typography gutterBottom variant="h6">
      Employee Nº{selectedRow.id}
    </Typography>

    <Accordion selectedRow={selectedRow} />
  </Box>
);
