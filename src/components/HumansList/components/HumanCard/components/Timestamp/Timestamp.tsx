import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import duration, { Duration } from 'dayjs/plugin/duration';
import { TimestampContainer } from './styled';

dayjs.extend(relativeTime);
dayjs.extend(duration);

export interface TimestampProps {
  date: number;
}

const getCurrentDutation = (date: number) => dayjs.duration(dayjs().diff(date));

// TODO: find a better way to format time
const formatTimestamp = (dateDuration: Duration): string => {
  if (dateDuration.asSeconds() < 60) {
    return `0m`;
  }

  if (dateDuration.asMinutes() < 60) {
    return `${dateDuration.asMinutes().toFixed()}m`;
  }

  if (dateDuration.asHours() < 24) {
    return `${dateDuration.asHours().toFixed()}h`;
  }

  if (dateDuration.asDays() < 30) {
    return `${dateDuration.asHours().toFixed()}d`;
  }

  if (dateDuration.asMonths() < 12) {
    return `${dateDuration.asMonths().toFixed()}m`;
  }

  return `${dateDuration.asYears().toFixed()}y`;
};

export const Timestamp = ({ date }: TimestampProps) => {
  const [timestamp, setTimestamp] = useState(
    formatTimestamp(getCurrentDutation(date))
  );

  useEffect(() => {
    setTimestamp(formatTimestamp(getCurrentDutation(date)));
  }, [date]);

  useEffect(() => {
    let intervalId: NodeJS.Timer;

    if (getCurrentDutation(date).asMinutes() < 60) {
      intervalId = setInterval(() => {
        setTimestamp(formatTimestamp(getCurrentDutation(date)));
      }, 60 * 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [duration]);

  return <TimestampContainer>{timestamp}</TimestampContainer>;
};
