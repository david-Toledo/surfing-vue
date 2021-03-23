import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Wax from '@/components/Wax'
import TheFarm from '@/components/TheFarm'
import Garie from '@/components/Garie'
import Mentawaii from '@/components/Mentawaii'
import Forecast from '@/components/Forecast'
import About from '@/components/About'
import SurfingCode from '@/components/SurfingCode'
import Rips from '@/components/Rips'
import Temp from '@/components/Temp'
import WipeOut from '@/components/WipeOut'
import Airports from '@/components/Airports'
import Boards from '@/components/Boards'
import BegginerBoard from '@/components/BegginerBoard'
import HowToFall from '@/components/HowToFall'
import Stretches from '@/components/Stretches'
import NeverAlone from '@/components/NeverAlone'
import HowToWax from '@/components/HowToWax'
import LowTide from '@/components/LowTide'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/wax',
      name: 'Wax',
      component: Wax
    },
    {
      path: '/farm',
      name: 'The Farm',
      component: TheFarm
    },
    {
      path: '/garie',
      name: 'Garie',
      component: Garie
    },
    {
      path: '/mentawaii',
      name: 'Mentawaii',
      component: Mentawaii
    },
    {
      path: '/forecast',
      name: 'Forecast',
      component: Forecast
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/code',
      name: 'Surfing Code',
      component: SurfingCode
    },
    {
      path: '/rips',
      name: 'Rips',
      component: Rips
    },
    {
      path: '/temp',
      name: 'Temp',
      component: Temp
    },
    {
      path: '/wipeout',
      name: 'Wipeout',
      component: WipeOut
    },
    {
      path: '/airports',
      name: 'Airports',
      component: Airports
    },
    {
      path: '/boards',
      name: 'Boards',
      component: Boards
    },
    {
      path: '/begginer',
      name: 'Beginner Board',
      component: BegginerBoard
    },
    {
      path: '/fall',
      name: 'How to fall',
      component: HowToFall
    },
    {
      path: '/stretches',
      name: 'Type of stretches',
      component: Stretches
    },
    {
      path: '/neveralone',
      name: 'Never alone',
      component: NeverAlone
    },
    {
      path: '/howtowax',
      name: 'How to wax',
      component: HowToWax
    },
    {
      path: '/lowtide',
      name: 'Low Tide',
      component: LowTide
    },
  ]
})
