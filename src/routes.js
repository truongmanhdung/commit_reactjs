import React from 'react'
import Login from './components/layouts/login';
import SignUp from './components/layouts/signup';
import WorkEdit from './components/layouts/work-edit';
import WorkAdd from './components/layouts/work_add';
import Home from './components/home';
const routes = [
     {
          path: '/',
          exact: true,
          component: ()=> <Home/>
     },
     {
          path: '/login',
          exact: false,
          component: ({history})=> <Login history={history}/>
     },
     {
          path: '/signup',
          exact: false,
          component: ({history})=> <SignUp history={history}/>
     },
     {
          path: '/work-add',
          exact: false,
          component: ({history})=> <WorkAdd history={history}/>
     },
     {
          path: '/work-edit/:id',
          exact: false,
          component: ({history,match})=> <WorkEdit match={match} history={history}/>
     },
    
     
];

export default routes