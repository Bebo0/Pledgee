
import Dashboard from './components/Pages/Dashboard';


import Login from './components/Pages/Login';


import Past from './components/Pages/Past';

import Forms from './components/Pages/Forms';
import Faq from './components/Pages/Faq';


import Decision from './components/Pages/DecisionPage';

import AcaResult from './components/Pages/AcaPast';
import Success from './components/Pages/Success';
import Sponsorships from './components/Pages/Sponsorships';
import About from './components/Pages/About';


export const routes = [



    {
        path: '/',
        title: 'Login',
        breadcrumb: 'Login',
        breadcrumb_link: true,
        exact: true,
        component: Login,
    },

    {
        path: '/Dashboard',
        title: 'Dashboard',
        breadcrumb: 'Dashboard',
        breadcrumb_link: true,
        exact: true,
        component: Dashboard,
    },
    
    
   
   
    {
        path: '/past',
        title: 'Past Votes',
        breadcrumb: 'Past',
        breadcrumb_link: false,
        exact: true,
        component: Past
    },
    {
        path: '/forms',
        title: 'Forms',
        breadcrumb: 'Forms',
        breadcrumb_link: false,
        exact: true,
        component: Forms
    },
   
 
    {
        path: '/login',
        title: 'Login',
        breadcrumb: 'Login',
        breadcrumb_link: false,
        exact: true,
        component: Login
    },
    {
        path: '/faq',
        title: 'FAQ',
        breadcrumb: 'FAQ',
        breadcrumb_link: false,
        exact: true,
        component: Faq
    },
    
    
  
    {
      path: '/2d460cd4',
      title: 'Decision',
      breadcrumb: 'Decision',
      breadcrumb_link: false,
      exact: true,
      component: Decision
    },
  
      {
        path: '/past/2d460cd4',
        title: 'Result: 2d460cd4',
        breadcrumb: 'Result: 2d460cd4',
        breadcrumb_link: false,
        exact: true,
        component: AcaResult
      },
      {
        path: '/success',
        title: 'Success',
        breadcrumb: 'Success',
        breadcrumb_link: false,
        exact: true,
        component: Success
      },
      {
        path: '/sponsorships',
        title: 'Sponsorships',
        breadcrumb: 'Sponsorships',
        breadcrumb_link: false,
        exact: true,
        component: Sponsorships
      },
      {
        path: '/about',
        title: 'About HyperVote',
        breadcrumb: 'About',
        breadcrumb_link: false,
        exact: true,
        component: About
      }
];
