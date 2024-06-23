import { TimelineCardList, TimelineDiagnosticsList, TimelineTagsList } from '@/components';
import type { TimelineCardProps } from '@/types';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Box, Card, CardContent, Divider, Typography } from '@mui/material';

export const TimelineCard = ({ item }: { item: TimelineCardProps }) => {
  const { date, totalAllowed, codes, diagnostics } = item;

  return (
    <Card className="timeline-card">
      <CardContent>
        <Box className="d-flex f-row" sx={{ mt: 2 }}>
          <CalendarMonthIcon sx={{ alignSelf: 'center' }} />
          <Typography variant="h5" color="text.secondary" sx={{ alignSelf: 'center', ml: 1 }}>
            {date}
          </Typography>
          <Typography
            className="text-end f-grow1"
            variant="h4"
            sx={{ color: (theme) => (totalAllowed > 5000 ? theme.palette.secondary.main : theme.palette.text.primary) }}
          >
            {`$${totalAllowed}`}
          </Typography>
        </Box>
        <Divider />
        <TimelineCardList codes={codes} />
        <TimelineDiagnosticsList diagnostics={diagnostics} />
        <Divider />
        <TimelineTagsList codes={codes} />
      </CardContent>
    </Card>
  );
};
