import type { Employer, Patient } from '@/types';
import { generateEmployeeMockData, generatePatientMockData } from '@/utils';
import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

interface StoredData {
  employees: Employer[];
  patients: Patient[];
}

const DataContext = createContext<StoredData>({ employees: [], patients: [] });

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<StoredData>();

  useEffect(() => {
    const employees = generateEmployeeMockData();
    const patients = generatePatientMockData();
    setData({ employees, patients });
  }, []);

  return <DataContext.Provider value={data || { employees: [], patients: [] }}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
