import side_nav_logo from '../../styles/images/Side-menu-header.svg'
import { useLocation, Link} from 'react-router-dom'
import frame_icon from '../../styles/images/Frame.svg'

const menuItems = [
  {
    label: 'Orders',
    icon: frame_icon,
    path: '/orders'
  },
  {
    label: 'Inventory',
    icon: frame_icon,
    path: '/inventory'
  },
  {
    label: 'Customers',
    icon: frame_icon,
    path: '/customers'
  },
  {
    label: 'Analytics',
    icon: frame_icon,
    path: '/analytics'
  },
  {
    label: 'Discounts',
    icon: frame_icon,
    path: '/discounts'
  },
  {
    label: 'Warehouse',
    icon: frame_icon,
    path: '/warehouse'
  },
]


const SideNav = () => {

  const location = useLocation()
  const pathname = location.pathname

  return (
    <div>
      <div className='side-nav-logo'>
        <img src={side_nav_logo} alt="urban-discount-logo"/>
      </div>
      {menuItems.map((menuItem) => {
        return(
          <Link to={menuItem.path} className={`menu-item-container ${ (pathname.indexOf(menuItem.path)> -1)? 'active-menu' : ''}`}>
            <div className='icon-container'>
              <img src={menuItem.icon} alt="urban-logo"/>
            </div>
            <span>{menuItem.label}</span>
          </Link>
        )
      })}
    </div>
  )
}

export default SideNav