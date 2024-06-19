import type { Employer, Patient } from '@/types';
import { Box, Paper, TextField } from '@mui/material';
import type { GridColDef } from '@mui/x-data-grid-premium';
import { useGridApiRef } from '@mui/x-data-grid-premium';
import { DataGridPremium as MuiDataGridPremium } from '@mui/x-data-grid-premium/DataGridPremium/DataGridPremium';
import type { ChangeEvent, FC } from 'react';
import { useEffect, useState } from 'react';

interface Props {
  rows: Employer[] | Patient[];
  columns: GridColDef[];
  setSelectedRow?: (_row: Employer | Patient) => void;
}

export const SearchDetailsGrid: FC<Props> = ({ rows, columns }) => {
  const [search, setSearch] = useState('');
  const [setSelectedRow] = useState<Employer | Patient>();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <Box
      sx={{
        height: '100%',
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
      <Paper
        sx={{ flex: '1 1 auto', height: 400, marginBottom: '16px', overflowY: 'auto', width: '100%', mt: '8px' }}
        elevation={3}
      >
        <DataGridPremium columns={columns} rows={rows} search={search} setSelectedRow={setSelectedRow} />
      </Paper>
      <Paper elevation={3} sx={{ mb: 2 }}>
        <TextField label="Details" placeholder="DetailsDetails" disabled={true} fullWidth />
      </Paper>
    </Box>
  );
};

interface DataGridPremiumProps extends Props {
  search: string;
}

const DataGridPremium: FC<DataGridPremiumProps> = ({ columns, rows, search, setSelectedRow }) => {
  const columnsForAutosize: string[] = columns.map((column) => column.field);
  const gridApiRef = useGridApiRef();
  const autoscrollColumnsOptions = {
    columns: columnsForAutosize,
    includeHeaders: true,
    includeOutliers: true,
  };

  // for autosize the columns in every moment that content length changes
  useEffect(
    () =>
      gridApiRef.current.subscribeEvent('stateChange', () =>
        gridApiRef.current.autosizeColumns(autoscrollColumnsOptions)
      ),
    []
  );

  useEffect(
    () =>
      gridApiRef.current.subscribeEvent('rowSelectionChange', (selected) => {
        const rowId = selected[0];
        const row = rows.find((row) => row.id === Number(rowId));
        setSelectedRow && setSelectedRow(row);
      }),
    []
  );

  return (
    <MuiDataGridPremium
      style={{ paddingBottom: '16px', flexDirection: 'column', display: 'flex', height: '100%' }}
      disableMultipleRowSelection
      columns={columns}
      // CONCERN: if you want to search in every column the table filtering will be reduced and looks slow
      rows={
        rows &&
        rows.filter((row) =>
          Object.values(row).some((value) => value.toString().toLowerCase().includes(search.toLowerCase()))
        )
      }
      apiRef={gridApiRef}
      autosizeOptions={autoscrollColumnsOptions}
    />
  );
};
