import { SearchDetailsGrid } from '@/components';
import { employeesGridColumns as columns } from '@/constants';
import { useData } from '@/contexts/DataContext';
import type { FC } from 'react';

export const EmployeesPage: FC = () => {
  const rows = useData()?.employees;

  return <SearchDetailsGrid rows={rows} columns={columns} />;
};
