import type { GridColDef } from '@mui/x-data-grid-premium';

export const SIDEBAR_WIDTH = 240;

export const employeesGridColumns: GridColDef[] = [
  { field: 'id', headerName: 'ID' },
  { field: 'firstName', headerName: 'First Name' },
  { field: 'lastName', headerName: 'Last Name' },
  { field: 'email', headerName: 'Email' },
  { field: 'jobTitle', headerName: 'Job Title' },
  { field: 'department', headerName: 'Department' },
  { field: 'manager', headerName: 'Manager' },
  { field: 'location', headerName: 'Location' },
  { field: 'company', headerName: 'Company' },
  { field: 'hireDate', headerName: 'Hire Date' },
  { field: 'salary', headerName: 'Salary', type: 'number' },
  { field: 'bonus', headerName: 'Bonus', type: 'number' },
  { field: 'performanceRating', headerName: 'Performance Rating' },
  { field: 'lastPromotion', headerName: 'Last Promotion' },
  { field: 'nextReview', headerName: 'Next Review' },
  { field: 'employmentStatus', headerName: 'Employment Status' },
];

export const patientsGridColumns: GridColDef[] = [
  { field: 'id', headerName: 'ID' },
  { field: 'firstName', headerName: 'First Name' },
  { field: 'lastName', headerName: 'Last Name' },
  { field: 'age', headerName: 'Age', type: 'number' },
  { field: 'gender', headerName: 'Gender' },
  { field: 'diagnosis', headerName: 'Diagnosis' },
  { field: 'medication', headerName: 'Medication' },
  { field: 'dosage', headerName: 'Dosage' },
  { field: 'frequency', headerName: 'Frequency' },
  { field: 'physician', headerName: 'Physician' },
  { field: 'lastVisit', headerName: 'Last Visit' },
  { field: 'nextVisit', headerName: 'Next Visit' },
  { field: 'insuranceProvider', headerName: 'Insurance Provider' },
  { field: 'policyNumber', headerName: 'Policy Number' },
  { field: 'medicalHistory', headerName: 'Medical History' },
];
