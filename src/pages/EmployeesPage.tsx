import { EmployeeDetails, SearchDetailsGrid } from '@/components';
import { employeesGridColumns as columns } from '@/constants';
import { useData } from '@/contexts/DataContext';
import type { Employer } from '@/types';
import { Box } from '@mui/material';
import type { FC } from 'react';
import { useState } from 'react';

export const EmployeesPage: FC = () => {
  const rows = useData()?.employees;
  const [selectedRow, setSelectedRow] = useState<Employer>();

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <SearchDetailsGrid
        pageCaption="Employees"
        rows={rows}
        columns={columns}
        searchBarLabel="Search in the First Name, Last name, Hire Date columns"
        searchBarColumns={['firstName', 'lastName', 'hireDate']}
        setSelectedRow={setSelectedRow}
        selectedRow={selectedRow}
      />
      {selectedRow && <EmployeeDetails selectedRow={selectedRow} />}
    </Box>
  );
};
