import './index.scss'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { notificationPanel } from '../../slice/NotificiationPanel'
import CloseIcon from '@mui/icons-material/Close'

type Props = {
  message: string,
  type: string,
}

const NotificationPanel = ({message, type}: Props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    const interval = setInterval(() => {
      dispatch(notificationPanel({
        show: false,
      }))
    }, 15000)
    return () => clearInterval(interval)
  }, [])

  const handleClear = () => {
    dispatch(notificationPanel({
      show: false,
    }))
  }

  return(
    <div className={`notification-panel-container ${type === 'error' ? 'notification-error' : 'notification-success'}`}>
      <span>{message}</span>
      <div onClick={handleClear}>
        <CloseIcon style={{color: 'white', width: 13, height: 13, cursor: 'pointer'}}/>
      </div>
    </div>
  )
}

export default NotificationPanel