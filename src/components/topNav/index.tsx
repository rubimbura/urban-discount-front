import './index.scss'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import avatar_icon from '../../styles/images/avatar-icon.png'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

const TopNav = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return(
    <div className='notification-profile-container'>
      <div>  
        <NotificationsNoneIcon/>
      </div>
      <button className='profile-ctn' aria-describedby={id}  onClick={handleClick}>
        <div className='profile-pic'>
          <img src={avatar_icon} alt="urban-icon" width={25} height={25}/>
        </div>
        <div className='name-ctn'>
          <div className='name'>
            <span className='key'>John Doe Bond</span>
            <span className='value'>Inventory staff</span>
          </div>
          <KeyboardArrowDownIcon/>
        </div>
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>
          <Link to="/admin/login">Logout</Link>
        </Typography>
      </Popover>
    </div>
  )
}

export default TopNav