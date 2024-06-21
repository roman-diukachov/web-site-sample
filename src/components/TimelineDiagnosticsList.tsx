import { Box, Typography } from '@mui/material';

export const TimelineDiagnosticsList = ({ diagnostics }: { diagnostics: string[] }) => (
  <Box sx={{ flex: 1, mt: 2, mb: 2, flexDirection: 'column' }}>
    <Typography variant="body2">Diagnostics:</Typography>
    <Typography variant="body2">{diagnostics.map((diagnostic) => `${diagnostic}, `)}</Typography>
  </Box>
);
