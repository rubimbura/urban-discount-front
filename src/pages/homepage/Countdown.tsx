
import { useGetDashboardQuery } from '../../api'


const CountDown = () => {
  const {data: dashboardData}: any = useGetDashboardQuery('test')
  return(
    <div className="count-down-ctn">
      <div className="item-ctn">
        <span className="key">123</span>
        <span className="value">Days</span>
      </div>
      <div className="item-ctn">
        <span className="key">90</span>
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