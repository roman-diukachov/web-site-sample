import type { Employer, Patient } from '@/types';

const randomDate = (start: Date, end: Date) =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

const generateCommonData = (i: number) => ({
  id: i + 1,
  firstName: `First Name ${i + 1}`,
  lastName: `Last Name ${i + 1}`,
  age: Math.floor(Math.random() * 60) + 20,
  gender: Math.random() > 0.5 ? 'Male' : 'Female',
  hireDate: randomDate(new Date(2020, 0, 1), new Date()).toISOString(),
  salary: Math.floor(Math.random() * 100000) + 30000,
  bonus: Math.floor(Math.random() * 10000) + 1000,
  performanceRating: `Performance Rating ${i + 1}`,
  lastPromotion: randomDate(new Date(2020, 0, 1), new Date()).toISOString(),
  nextReview: randomDate(new Date(2020, 0, 1), new Date()).toISOString(),
  employmentStatus: Math.random() > 0.5 ? 'Full-Time' : 'Part-Time',
});

export const generatePatientMockData = () => {
  console.log('generatePatientMockData - 2');
  const numRows = 10000;
  const rows: Patient[] = [];
  for (let i = 0; i < numRows; i++) {
    rows.push({
      ...generateCommonData(i),
      diagnosis: `Diagnosis ${i + 1}`,
      medication: `Medication ${i + 1}`,
      dosage: `${Math.floor(Math.random() * 100) + 1} mg`,
      frequency: `${Math.floor(Math.random() * 3) + 1} times a day`,
      physician: `Physician ${i + 1}`,
      lastVisit: randomDate(new Date(2020, 0, 1), new Date()).toISOString(),
      nextVisit: randomDate(new Date(2020, 0, 1), new Date()).toISOString(),
      insuranceProvider: `Insurance Provider ${i + 1}`,
      policyNumber: `Policy Number ${i + 1}`,
      medicalHistory: `Medical History ${i + 1}`,
    });
  }
  return rows;
};

export const generateEmployeeMockData = () => {
  console.log('generateEmployeeMockData - 1');

  const numRows = 10000;
  const rows: Employer[] = [];
  for (let i = 0; i < numRows; i++) {
    rows.push({
      ...generateCommonData(i),
      email: `email${i + 1}@company.com`,
      jobTitle: `Job Title ${i + 1}`,
      department: `Department ${i + 1}`,
      manager: `Manager ${i + 1}`,
      location: `Location ${i + 1}`,
      company: `Company ${i + 1}`,
    });
  }
  return rows;
};
