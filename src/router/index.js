import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import ('@/views/home/Home')
const Detail = () =>  import( '@/views/detail/Detail')
const Search = () =>  import( '@/views/search/Search')
const Login = () => import('@/views/login/Login')
const About = () => import('@/views/about/About')
const Contact = () => import('@/views/contact/Contact')

Vue.use(Router)
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path:'/home',
      component: Home
    },
    {
      path:'/detail',
      component: Detail
    },
    {
      path:'/search',
      component: Search
    },
    {
      path:'/login',
      component: Login
    },
    {
      path:'/about',
      component: About
    },
    {
      path:'/contact',
      component: Contact
    }
  ]
})
