import ContactForm from "./ContactForm"
import NotificationPanel from "../../components/notificationPanel"
import urban_logo from '../../styles/images/urban-discount-logo.svg'
import twitter_icon from '../../styles/images/twitter-icon.svg'
import facebook_icon from '../../styles/images/facebook-icon.png'
import instagram_icon from '../../styles/images/instagram-icon.svg'
import uraban_shoping from '../../styles/images/shoping-icon.svg'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import CountDown from "./Countdown"


export default function Home() {
  
  const { notificationPanel } = useSelector((state: RootState) => state)
  const { message, show, type } = notificationPanel

  const instagramUrl = 'https://www.instagram.com/urbandiscounts_/'
  const twitterUrl = 'https://x.com/myurbandiscount?t=npUOReTsLqS37-97Fi254g&s=09'
  const facebookUrl = 'https://www.facebook.com/profile.php?id=61552199879667'

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
          {/* <div className="home-items-container__coming-soon-ctn">
            <p className="">coming soon</p>
          </div> */}
          <div className="home-items-container__header-text-ctn">
            <span>All about deals & discounts</span>
          </div>
          <div className="home-items-container__content-ctn">
            <span>
               Imagine having access to exclusive discounts on your everyday essentials. Urban Discounts is your personal shopping companion, dedicated to uncovering the most remarkable deals on your everyday essentials, bringing them straight to you, hassle-free!
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
                  width={23} 
                  height={23}/>
              </a>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                <img 
                  src={instagram_icon} 
                  alt="urban-discount-twitter" 
                  width={24} height={24}
                />
              </a>
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                <img 
                  src={facebook_icon} 
                  alt="urban-discount-twitter" 
                  width={26} height={26}
                />
              </a>
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
