import { Suspense } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import DefaultLayout from './DefaultLayout'

const LandingPage = lazy(() => import('../pages/landingPage')) 
const Login = lazy(() => import('../pages/auth/Login'))

const AppLayout = () => {
  return(
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/admin/login" element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<DefaultLayout/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppLayout