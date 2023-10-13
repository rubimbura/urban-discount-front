import SideNav from "../components/sideNav"
import TopNav from "../components/topNav"
import AppContent from "./AppContent"


const DefaultLayout = () => {
  return(
    <div className="root-container">
      <div className="root-container__side-nav">
        <SideNav/>
      </div>
      <div className="root-container__body">
        <div className="top-nav">
          <TopNav/>
        </div>
        <div className="content">
          <AppContent/>
        </div>
      </div>
    </div>
  )
}
export default DefaultLayout