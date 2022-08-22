import React from 'react'

const Landing = React.lazy(() => import('./views/Landing'))
const Home = React.lazy(() => import('./views/Home'))

const Admin = React.lazy(() => import('./views/Admin'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/landing', name: 'Landing', element: Landing },
  { path: '/home', name: 'Home', element: Home },

  { path: '/admin', name: 'Admin', element: Admin },

]

export default routes
