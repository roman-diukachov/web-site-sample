import { TimelineCardList, TimelineDiagnosticsList, TimelineTagsList } from '@/components';
import type { TimelineCardProps } from '@/types';
import { Box, Card, CardContent, Divider, Typography } from '@mui/material';

export const TimelineCard = ({ item }: { item: TimelineCardProps }) => {
  const { date, totalAllowed, codes, diagnostics } = item;

  return (
    <Card className="timeline-card">
      <CardContent>
        <Box className="d-flex f-row" sx={{ mt: 2 }}>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            {date}
          </Typography>
          <Typography className="text-end f-grow1" variant="h4" color={totalAllowed > 5000 ? 'red' : 'black'}>
            {totalAllowed > 0 ? `$${totalAllowed}` : totalAllowed}
          </Typography>
        </Box>
        <TimelineCardList codes={codes} /> {/*TODO: update the UI about to add the scrollbar visibly always*/}
        <TimelineDiagnosticsList diagnostics={diagnostics} />
        <Divider />
        <TimelineTagsList codes={codes} />
      </CardContent>
    </Card>
  );
};
