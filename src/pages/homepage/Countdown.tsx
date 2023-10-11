import { useGetDashboardQuery, useFetchCountDownQuery } from '../../api';
import { useState, useEffect } from 'react';

const CountDown = () => {
  const { data: dashboardData } = useGetDashboardQuery('test');
  const { data: countdownData } = useFetchCountDownQuery('test');
  const [remainingDays, setRemainingDays] = useState(0);
  const [remainingHours, setRemainingHours] = useState(0);

  const launchDate = countdownData?.[0]?.value;

  useEffect(() => {
    if (launchDate) {
      const futureDate = new Date(launchDate);
      const updateCountdown = () => {
        const currentDate = new Date();
        const timeDifference = futureDate.getTime() - currentDate.getTime();
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        setRemainingDays(days);
        setRemainingHours(hours);
      };

      updateCountdown();
      const intervalId = setInterval(updateCountdown, 1000);
      return () => clearInterval(intervalId);
    }
  }, [launchDate]);

  return (
    <div className="count-down-ctn">
      <div className="item-ctn">
        <span className="key">{remainingDays}</span>
        <span className="value">Days</span>
      </div>
      <div className="item-ctn">
        <span className="key">{remainingHours}</span>
        <span className="value">Hours</span>
      </div>
      <div className="item-ctn">
        <span className="key">{dashboardData?.[0]?.value || 0}</span>
        <span className="value">on wait list</span>
      </div>
    </div>
  );
};

export default CountDown;
