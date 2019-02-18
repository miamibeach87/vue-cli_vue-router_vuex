import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import PageNotFound from './components/PageNotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/users',
      name: 'users',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "usersChunk" */ './components/Users.vue'),
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: ':id/profile',
          name: 'profile',
          component:() => import(/* webpackChunkName: "userProfileChunk" */ './components/UserProfile.vue'),
        },
      ],
    },
    {
      path: '/settings',
      name: 'settings',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "settingsChunk" */ './components/Settings.vue'),
    },
    {
      path: '*',
      name: 'not-found',
      component: PageNotFound,
    },

  ],
});
