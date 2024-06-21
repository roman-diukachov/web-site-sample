import { TimelineCardList, TimelineTagsList } from '@/components';
import { TimelineDiagnosticsList } from '@/components';
import type { TimelineCardProps } from '@/types';
import { Box, Card, CardContent, Divider, Typography } from '@mui/material';

export const TimelineCard = ({ item }: { item: TimelineCardProps }) => {
  const { date, totalAllowed, codes, diagnostics } = item;

  return (
    <Card sx={{ height: 350 }}>
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2 }}>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            {date}
          </Typography>
          <Typography sx={{ flexGrow: 1 }} variant="h4" color={totalAllowed > 5000 ? 'red' : 'black'}>
            {totalAllowed > 0 ? `$${totalAllowed}` : totalAllowed}
          </Typography>
        </Box>

        <TimelineCardList codes={codes} />

        <TimelineDiagnosticsList diagnostics={diagnostics} />

        <Divider />
        <TimelineTagsList codes={codes} />
      </CardContent>
    </Card>
  );
};
