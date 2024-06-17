export type Employer = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  department: string;
  manager: string;
  location: string;
  company: string;
  hireDate: string;
  salary: number;
  bonus: number;
  performanceRating: string;
  lastPromotion: string;
  nextReview: string;
  employmentStatus: string;
};

export type Patient = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  diagnosis: string;
  medication: string;
  dosage: string;
  frequency: string;
  physician: string;
  lastVisit: string;
  nextVisit: string;
  insuranceProvider: string;
  policyNumber: string;
  medicalHistory: string;
};
