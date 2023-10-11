
import { useGetDashboardQuery } from '../../api'
import { useState, useEffect } from 'react'


const CountDown = () => {
  const {data: dashboardData}: any = useGetDashboardQuery('test')

  const [remainingDays, setRemainingDays] = useState(0);
  const [remainingHours, setRemainingHours] = useState(0);


  useEffect(() => {
    // Define the future date (40 days from today)
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 40);

    const updateCountdown = () => {
      const currentDate = new Date();
      const timeDifference = futureDate.getTime() - currentDate.getTime();
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      setRemainingDays(days);
      setRemainingHours(hours);
    };

    // Update the countdown initially
    updateCountdown();

    // Update the countdown every second (adjust the interval as needed)
    const intervalId = setInterval(updateCountdown, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);


  return(
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
  )
}

export default CountDown