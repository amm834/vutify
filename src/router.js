import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Projects from './components/Projects'
import Team from './components/Team'
Vue.use(VueRouter);

const routes = [
  {
  path: '/',
  component: Home
},
  {
  path: '/projects',
  component: Projects
},
  {
  path: '/team',
  component: Team
},
];

const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router;