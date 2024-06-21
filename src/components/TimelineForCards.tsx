import { TimelineCard } from '@/components';
import type { TimelineCardProps, TimelineRecord } from '@/types';
import { prepareCardViewData } from '@/utils';
import {
  Timeline as MuiTimeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';
import type { FC } from 'react';

interface Props {
  data: TimelineRecord[];
}

export const TimelineForCards: FC<Props> = ({ data }) => {
  const dataList: TimelineCardProps[] = prepareCardViewData(data);

  return (
    <MuiTimeline position="alternate-reverse" sx={{ mt: '100px' /*, width: '500px', alignSelf: 'center'*/ }}>
      {dataList.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector className={index != data.length - 1 ? 'show' : 'hide'} /> {/*add class*/}
          </TimelineSeparator>
          <TimelineContent sx={{ mt: '-100px' }}>
            <TimelineCard item={item} />
          </TimelineContent>
        </TimelineItem>
      ))}
    </MuiTimeline>
  );
};
