import { DataProvider } from '@/contexts';
import { Layout } from '@/layout';
import { EmployeesPage, PatientsPage, TimelinePage } from '@/pages';
import { useAppTheme } from '@/theme';
import { ThemeProvider } from '@mui/material/styles';
import type { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const App: FC = () => (
  <ThemeProvider theme={useAppTheme()}>
    <Router>
      <DataProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<EmployeesPage />} />
            <Route path="/patients" element={<PatientsPage />} />
            <Route path="/timeline" element={<TimelinePage />} />
          </Routes>
        </Layout>
      </DataProvider>
    </Router>
  </ThemeProvider>
);
