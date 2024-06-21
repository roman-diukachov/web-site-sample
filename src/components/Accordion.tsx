import { employeeDetails, patientDetails } from '@/constants';
import type { Employer, Patient } from '@/types';
import { isEmployerType } from '@/utils';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion as MuiAccordion, AccordionDetails, AccordionSummary, Box } from '@mui/material';
import type { FC } from 'react';

interface Props {
  selectedRow: Employer | Patient;
}

export const Accordion: FC<Props> = ({ selectedRow }) => {
  const details = isEmployerType(selectedRow) ? employeeDetails : patientDetails;

  return (
    <>
      {details.map((section, index) => (
        <MuiAccordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <div className="summary-title">{section.section}</div>
          </AccordionSummary>
          <AccordionDetails>
            {section.fields.map((field, index) => (
              <Box key={index} className="details-row">
                <div className="details-field-title">{field}: </div>
                <div>
                  {isEmployerType(selectedRow)
                    ? selectedRow[field as keyof Employer]
                    : selectedRow[field as keyof Patient]}
                </div>
              </Box>
            ))}
          </AccordionDetails>
        </MuiAccordion>
      ))}
    </>
  );
};
