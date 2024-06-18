import { SearchDetailsGrid } from '@/components';
import { patientsGridColumns as columns } from '@/constants';
import { useData } from '@/contexts/DataContext';
import type { FC } from 'react';

export const PatientsPage: FC = () => {
  const rows = useData()?.patients;

  console.log('patients', rows);

  return <SearchDetailsGrid rows={rows} columns={columns} />;
};
