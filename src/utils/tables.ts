import type { Employer, Patient } from '@/types';

export const filterRows = <T extends object>(
  rows: T[],
  searchBarColumns: Array<keyof Employer | keyof Patient>,
  search: string
): T[] => rows.filter((row) =>
    searchBarColumns.some(
      (field) =>
        field in row &&
        (typeof row[field as keyof T] === 'string' ? (row[field as keyof T] as string).toLowerCase() : '').includes(
          search.toLowerCase()
        )
    )
  );

// TODO: Update with generic type
export const isEmployerType = (obj: Employer | Patient): obj is Employer => (obj as Employer).jobTitle !== undefined;
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
  const numRows = 10;
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
      emergencyContact: `Emergency Contact ${i + 1}`,
      allergies: `Allergies ${i + 1}`,
      bloodType: `Blood Type ${i + 1}`,
      height: `${Math.floor(Math.random() * 60) + 150} cm`,
      weight: `${Math.floor(Math.random() * 60) + 40} kg`,
      bmi: `${Math.floor(Math.random() * 10) + 15}`,
      smokingStatus: Math.random() > 0.5 ? 'Smoker' : 'Non-Smoker',
      alcoholUse: Math.random() > 0.5 ? 'Yes' : 'No',
      exerciseFrequency: `${Math.floor(Math.random() * 7)} times a week`,
      diet: `Diet ${i + 1}`,
      familyHistory: `Family History ${i + 1}`,
      immunizationStatus: `Immunization Status ${i + 1}`,
      lastCheckup: randomDate(new Date(2020, 0, 1), new Date()).toISOString(),
    });
  }
  return rows;
};
export const generateEmployeeMockData = () => {
  const numRows = 10;
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
      dateOfBirth: randomDate(new Date(1970, 0, 1), new Date(2003, 0, 1)).toISOString(),
      address: `Address ${i + 1}`,
      phoneNumber: `Phone Number ${i + 1}`,
      emergencyContact: `Emergency Contact ${i + 1}`,
      startDate: randomDate(new Date(2020, 0, 1), new Date()).toISOString(),
      endDate: randomDate(new Date(2020, 0, 1), new Date()).toISOString(),
      jobDescription: `Job Description ${i + 1}`,
      skills: `Skills ${i + 1}`,
      education: `Education ${i + 1}`,
      certifications: `Certifications ${i + 1}`,
      languages: `Languages ${i + 1}`,
      nationality: `Nationality ${i + 1}`,
      ethnicity: `Ethnicity ${i + 1}`,
      disabilityStatus: `Disability Status ${i + 1}`,
      veteranStatus: `Veteran Status ${i + 1}`,
    });
  }
  return rows;
};
