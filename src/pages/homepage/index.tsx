import ContactForm from "./ContactForm"
import NotificationPanel from "../../components/notificationPanel"
import urban_logo from '../../styles/images/urban-discount-logo.svg'
import twitter_icon from '../../styles/images/twitter-icon.svg'
import instagram_icon from '../../styles/images/instagram-icon.svg'
import uraban_shoping from '../../styles/images/shoping-icon.svg'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import CountDown from "./Countdown"
import { sm, md} from '../../constants/responsive'


export default function Home() {
  
  const { notificationPanel } = useSelector((state: RootState) => state)
  const { message, show, type } = notificationPanel

  const instagramUrl = 'https://www.instagram.com/your_instagram_username/'
  const twitterUrl = 'https://x.com/myurbandiscount?t=npUOReTsLqS37-97Fi254g&s=09'

  return (
    <main className="home-page-container">
      {show && (
          <NotificationPanel message={message} type={type} />
        )}
      <div className="flex flex-row justify-between bg-white h-full home-items-container">
        <div className="left-section-container">
          <div className="home-items-container__logo">
            <img 
              alt="urban-discount-logo"
              src={urban_logo}
              width={100}
              height={100}
            />
          </div>
          <div className="home-items-container__coming-soon-ctn">
            <p className="">coming soon</p>
          </div>
          <div className="home-items-container__header-text-ctn">
            <span>Hassle-Free discounts: The Best Deals In Town!</span>
          </div>
          <div className="home-items-container__content-ctn">
            <span>
              Tired of the market hustle and not knowing what deals to expect? Well, Urban Discounts has your back! Just sign up, be the first to know when we launch, and trust me, we've got some fantastic coupons lined up just for you. Let's make your shopping experience a breeze!
            </span>
          </div>
            <div className="home-page-contact-form">
              <ContactForm/>
              <CountDown/>
            </div>
            <div className="home-page-footer-container">
              <span>Follow us</span>
              <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                <img 
                  src={twitter_icon} 
                  alt="urban-discount-twitter" 
                  width={24} 
                  height={24}/>
              </a>
              {/* <div>
                <img 
                  src={instagram_icon} 
                  alt="urban-discount-twitter" 
                  width={24} height={24}
                />
              </div> */}
            </div>
        </div>
        <div className="right-side-image-container">
          <img
            src={uraban_shoping}
            alt="urban-discount-shoping-icon"
            width={500}
            height={500}
          />
        </div>
      </div>
    </main>
  )
}
