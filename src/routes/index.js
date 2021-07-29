import {Navigate} from '@/pages/navigate'
import {Home} from '@/pages/home'
import {Login} from '@/pages/login'
const routes = [
  {
    path: '/',
    component: Navigate
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '*',
    component: Navigate
  },
]

export default routes