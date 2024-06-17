import { DataProvider } from '@/contexts';
import { Layout } from '@/layouts';
import { EmployeesPage, PatientsPage } from '@/pages';
import { useAppTheme } from '@/theme';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import type { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: FC = () => (
  <ThemeProvider theme={useAppTheme()}>
    <Router>
      <CssBaseline />
      <DataProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<EmployeesPage />} />
            <Route path="/patients" element={<PatientsPage />} />
          </Routes>
        </Layout>
      </DataProvider>
    </Router>
  </ThemeProvider>
);

export default App;
