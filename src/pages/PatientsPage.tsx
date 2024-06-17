import { patientsGridColumns as columns } from '@/constants';
import { useData } from '@/contexts/DataContext';
import type { Patient } from '@/types';

import { Box, Paper, TextField } from '@mui/material';
import { DataGridPremium } from '@mui/x-data-grid-premium';
import React, { useState } from 'react';

export const PatientsPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const rows = useData()?.patients;

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <Box>
      <TextField
        label="Search"
        variant="outlined"
        value={search}
        onChange={handleSearchChange}
        fullWidth
        margin="normal"
      />
      <Paper style={{ height: 600, width: '100%' }} elevation={2}>
        <DataGridPremium
          rows={rows && rows.filter((row: Patient) => row.firstName.toLowerCase().includes(search.toLowerCase()))} // TODO: apply search to all columns
          columns={columns}
        />
      </Paper>
      <Paper elevation={1}>
        <Box mt={2} p={2} border={1} borderColor="grey.400">
          Details
        </Box>
      </Paper>
    </Box>
  );
};
