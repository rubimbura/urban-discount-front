import { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import routes from './Routes'

const AppContent = () => {
  return (
    <Suspense fallback={<></>} >
      <Routes>
        {routes.map((route, id) => {
          return (
            route.element && (
              <Route key={id} path={route.path} element={<route.element/>} />
            )
          )
        })}
        <Route path="/" element={<Navigate to="/orders" replace />} />
      </Routes>
    </Suspense>
  )
}


export default AppContent