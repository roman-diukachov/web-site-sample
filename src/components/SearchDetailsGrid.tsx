import type { Employer, Patient } from '@/types';
import { Box, Paper, TextField } from '@mui/material';
import type { GridColDef } from '@mui/x-data-grid-premium';
import { DataGridPremium as MuiDataGridPremium } from '@mui/x-data-grid-premium/DataGridPremium/DataGridPremium';
import type { ChangeEvent, FC } from 'react';
import { useState } from 'react';

interface Props {
  rows: Employer[] | Patient[];
  columns: GridColDef[];
}

export const SearchDetailsGrid: FC<Props> = ({ rows, columns }) => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <Box
      sx={{
        height: 'calc(100% - 64px)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <TextField
        label="Search in every field"
        variant="outlined"
        value={search}
        onChange={handleSearchChange}
        fullWidth
        margin="normal"
      />
      <Paper sx={{ flex: '1 1 auto', height: 400, marginBottom: '16px', overflowY: 'auto', width: '100%', mt: '8px' }} elevation={2}>
        <DataGridPremium columns={columns} rows={rows} search={search} />
      </Paper>
      <Paper elevation={1} sx={{mb: 2}}>
        <Box  p={2} border={1} borderColor="grey.400">
          Details
        </Box>
      </Paper>
    </Box>
  );
};

interface DataGridPremiumProps extends Props {
  search: string;
}

const DataGridPremium: FC<DataGridPremiumProps> = ({ columns, rows, search }) => (
  <MuiDataGridPremium
    style={{ paddingBottom: '16px', flexDirection: 'column', display: 'flex', height: '100%' }}
    disableMultipleRowSelection
    columns={columns}
    rows={
      rows &&
      rows.filter((row) =>
        Object.values(row).some((value) => value.toString().toLowerCase().includes(search.toLowerCase()))
      )
    }
  />
);
