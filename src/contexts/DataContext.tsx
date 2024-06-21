// @ts-ignore-error configure correctly if further expected to get files locally
import timelineCsvFile from '@/mock/dataforuitask.csv';
import type { Employer, Patient, TimelineRecord } from '@/types';
import { generateEmployeeMockData, generatePatientMockData } from '@/utils';
import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

interface StoredData {
  employees: Employer[];
  patients: Patient[];
  timelineCsvFile: TimelineRecord[];
}

const DataContext = createContext<StoredData>({ employees: [], patients: [], timelineCsvFile: [] });

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<StoredData>();

  useEffect(() => {
    const employees = generateEmployeeMockData();
    const patients = generatePatientMockData();

    setData({ employees, patients, timelineCsvFile });
  }, []);

  return (
    <DataContext.Provider value={data || { employees: [], patients: [], timelineCsvFile: [] }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
