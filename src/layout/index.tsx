import { Suspense } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

const LandingPage = lazy(() => import('../pages/landingPage')) 


const AppLayout = () => {
  return(
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppLayout