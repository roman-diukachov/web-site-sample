import type { Employer, Patient } from '@/types';
import type { GridColDef } from '@mui/x-data-grid-premium';

// TODO: this file will not exist in such a huge form
//  because backend will cover such settings

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
  { field: 'dateOfBirth', headerName: 'Date of Birth' },
  { field: 'address', headerName: 'Address' },
  { field: 'phoneNumber', headerName: 'Phone Number' },
  { field: 'emergencyContact', headerName: 'Emergency Contact' },
  { field: 'startDate', headerName: 'Start Date' },
  { field: 'endDate', headerName: 'End Date' },
  { field: 'jobDescription', headerName: 'Job Description' },
  { field: 'skills', headerName: 'Skills' },
  { field: 'education', headerName: 'Education' },
  { field: 'certifications', headerName: 'Certifications' },
  { field: 'languages', headerName: 'Languages' },
  { field: 'nationality', headerName: 'Nationality' },
  { field: 'ethnicity', headerName: 'Ethnicity' },
  { field: 'disabilityStatus', headerName: 'Disability Status' },
  { field: 'veteranStatus', headerName: 'Veteran Status' },
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
  { field: 'emergencyContact', headerName: 'Emergency Contact' },
  { field: 'allergies', headerName: 'Allergies' },
  { field: 'bloodType', headerName: 'Blood Type' },
  { field: 'height', headerName: 'Height' },
  { field: 'weight', headerName: 'Weight' },
  { field: 'bmi', headerName: 'BMI' },
  { field: 'smokingStatus', headerName: 'Smoking Status' },
  { field: 'alcoholUse', headerName: 'Alcohol Use' },
  { field: 'exerciseFrequency', headerName: 'Exercise Frequency' },
  { field: 'diet', headerName: 'Diet' },
  { field: 'familyHistory', headerName: 'Family History' },
  { field: 'immunizationStatus', headerName: 'Immunization Status' },
  { field: 'lastCheckup', headerName: 'Last Checkup' },
  { field: 'medication', headerName: 'Medication' },
  { field: 'dosage', headerName: 'Dosage' },
  { field: 'frequency', headerName: 'Frequency' },
];

export const employeeDetails: { section: string; fields: Array<keyof Employer> }[] = [
  {
    section: 'Personal Information',
    fields: [
      'firstName',
      'lastName',
      'email',
      'dateOfBirth',
      'address',
      'phoneNumber',
      'emergencyContact',
      'nationality',
      'ethnicity',
      'disabilityStatus',
      'veteranStatus',
    ],
  },
  {
    section: 'Job Details',
    fields: [
      'jobTitle',
      'department',
      'manager',
      'location',
      'company',
      'hireDate',
      'startDate',
      'endDate',
      'jobDescription',
    ],
  },
  {
    section: 'Compensation',
    fields: ['salary', 'bonus'],
  },
  {
    section: 'Performance',
    fields: ['performanceRating', 'lastPromotion', 'nextReview'],
  },
  {
    section: 'Additional Information',
    fields: ['skills', 'education', 'certifications', 'languages'],
  },
];

export const patientDetails: { section: string; fields: Array<keyof Patient> }[] = [
  {
    section: 'Personal Information',
    fields: ['firstName', 'lastName', 'age', 'gender', 'emergencyContact'],
  },
  {
    section: 'Diagnosis and Medication',
    fields: ['diagnosis', 'medication', 'dosage', 'frequency', 'physician', 'lastVisit', 'nextVisit'],
  },
  {
    section: 'Medical History and Vital',
    fields: [
      'medicalHistory',
      'allergies',
      'bloodType',
      'height',
      'weight',
      'bmi',
      'smokingStatus',
      'alcoholUse',
      'exerciseFrequency',
      'diet',
      'familyHistory',
      'immunizationStatus',
      'lastCheckup',
    ],
  },
  {
    section: 'Insurance Information',
    fields: ['insuranceProvider', 'policyNumber'],
  },
];
