import { Box, Typography } from '@mui/material';

export const TimelineDiagnosticsList = ({ diagnostics }: { diagnostics: string[] }) => (
  <Box sx={{ mt: 2, mb: 2 }}>
    <Typography variant="body1" className="text-start">
      Diagnostics:
    </Typography>
    <Typography variant="body2" className="text-start">
      {diagnostics.map((diagnostic) => `${diagnostic}  `)}
    </Typography>
  </Box>
);
