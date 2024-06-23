import type { Employer, Patient } from '@/types';
import { filterRows } from '@/utils';
import { Box, Paper, TextField, Typography } from '@mui/material';
import type { GridColDef } from '@mui/x-data-grid-premium';
import { useGridApiRef } from '@mui/x-data-grid-premium';
import { DataGridPremium as MuiDataGridPremium } from '@mui/x-data-grid-premium/DataGridPremium/DataGridPremium';
import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';

interface Props<T> {
  pageCaption: string;
  rows: T[];
  columns: GridColDef[];
  searchBarLabel: string;
  searchBarColumns: Array<keyof Employer | keyof Patient>;
  setSelectedRow: (_row: T) => void;
  selectedRow?: Employer | Patient;
}

const COLUMNS_AMOUNT = 15;

export const SearchDetailsGrid = <T extends object>({
  pageCaption,
  rows,
  columns,
  searchBarLabel,
  searchBarColumns,
  setSelectedRow,
  selectedRow
}: Props<T>) => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <Box className="page-header">
        <Typography variant="h3" sx={{ mt: '8px', flexGrow: 1 }}>
          {pageCaption}
        </Typography>
        <TextField
          label={searchBarLabel}
          variant="outlined"
          value={search}
          onChange={handleSearchChange}
          fullWidth
          margin="normal"
          sx={{ width: '60%' }}
        />
      </Box>
      <Paper
        className={`table-container ${selectedRow ? ' is-open' : ''}`}
        elevation={3}
      >
        <DataGridPremium<T>
          pageCaption={pageCaption}
          searchBarLabel={searchBarLabel}
          columns={columns}
          rows={rows}
          search={search}
          setSelectedRow={setSelectedRow}
          searchBarColumns={searchBarColumns}
        />
      </Paper>
    </>
  );
};

interface DataGridPremiumProps<T> extends Props<T> {
  search: string;
}

const DataGridPremium = <T extends object>({
  columns,
  rows,
  setSelectedRow,
  searchBarColumns,
  search,
}: DataGridPremiumProps<T>) => {
  const gridApiRef = useGridApiRef();
  const filteredRows = filterRows(rows, searchBarColumns, search);

  // for autosize the columns in every moment that content length changes
  useEffect(() => {
    const columnsForAutosize: string[] = columns.slice(0, COLUMNS_AMOUNT).map((column) => column.field);
    const autosizeColumnsOptions = {
      columns: columnsForAutosize,
      includeHeaders: true,
      includeOutliers: true,
    };

    gridApiRef.current.subscribeEvent('stateChange', () => gridApiRef.current.autosizeColumns(autosizeColumnsOptions));
  }, [columns, gridApiRef]);

  return (
    <MuiDataGridPremium
      apiRef={gridApiRef}
      style={{ paddingBottom: '16px', flexDirection: 'column', display: 'flex', height: '100%' }}
      disableMultipleRowSelection
      columns={columns.slice(0, COLUMNS_AMOUNT)}
      rows={filteredRows}
      onRowClick={(params) => setSelectedRow(params.row)}
    />
  );
};
