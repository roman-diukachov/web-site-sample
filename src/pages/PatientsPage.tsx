import { SearchDetailsGrid } from '@/components';
import { patientsGridColumns as columns } from '@/constants';
import { useData } from '@/contexts/DataContext';
import type { FC } from 'react';

export const PatientsPage: FC = () => {
  const rows = useData()?.patients;

  return (
    <SearchDetailsGrid
      rows={rows}
      columns={columns}
      searchBarLabel="Search in the First Name, Last name, Age columns"
      searchBarColumns={['firstName', 'lastName', 'age']}
    />
  );
};
