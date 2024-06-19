import { PatientDetails, SearchDetailsGrid } from '@/components';
import { patientsGridColumns as columns } from '@/constants';
import { useData } from '@/contexts/DataContext';
import type { Patient } from '@/types';
import { Box } from '@mui/material';
import type { FC } from 'react';
import { useState } from 'react';

export const PatientsPage: FC = () => {
  const rows = useData()?.patients;
  const [selectedRow, setSelectedRow] = useState<Patient>();

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <SearchDetailsGrid
        pageCaption="Patients"
        rows={rows}
        columns={columns}
        searchBarLabel="Search in the First Name, Last name, Age columns"
        searchBarColumns={['firstName', 'lastName', 'age']}
        setSelectedRow={setSelectedRow}
        selectedRow={selectedRow}
      />
      {selectedRow && <PatientDetails selectedRow={selectedRow} />}
    </Box>
  );
};
