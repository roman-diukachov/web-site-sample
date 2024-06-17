import { employeesGridColumns as columns } from '@/constants';
import { useData } from '@/contexts/DataContext';
import { Box, Paper, TextField } from '@mui/material';
import { DataGridPremium } from '@mui/x-data-grid-premium';
import type { ChangeEvent, FC } from 'react';
import { useState } from 'react';

export const EmployeesPage: FC = () => {
  const [search, setSearch] = useState('');
  const rows = useData()?.employees;

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
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
      <Paper style={{ height: 600, width: '100%' }}>
        <DataGridPremium
          rows={rows && rows.filter((row) => row.firstName.toLowerCase().includes(search.toLowerCase()))} // TODO: apply search to all columns
          columns={columns}
        />
      </Paper>
      <Box mt={2} p={2} border={1} borderColor="grey.400">
        Details
      </Box>
    </Box>
  );
};
