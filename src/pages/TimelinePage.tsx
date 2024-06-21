import { TimelineForCards } from '@/components';
import { useData } from '@/contexts/DataContext';

export const TimelinePage = () => {
  const timelineCsvFile = useData()?.timelineCsvFile;

  return <TimelineForCards data={timelineCsvFile} />;
};
