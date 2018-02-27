import storeLayout from '../components/store/Layout/storeLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages

import UserProfile from 'src/components/store/Views/UserProfile.vue'
import Notifications from 'src/components/store/Views/Notifications.vue'
import Icons from 'src/components/store/Views/Icons.vue'
import Maps from 'src/components/store/Views/Maps.vue'
import Typography from 'src/components/store/Views/Typography.vue'
import stable from 'src/components/store/Views/stable.vue'
import Overview from 'src/components/store/Views/overview.vue'

const routes = [
  {
    path: '/',
    component: storeLayout,
    redirect: '/admin/overview'
  },
  {
    path: '/admin',
    component: storeLayout,
    redirect: '/admin/stable',
    children: [
      {
        path: 'overview',
        name: 'overview',
        component: Overview
      },
      {
        path: 'stats',
        name: 'stats',
        component: UserProfile
      },
      {
        path: 'notifications',
        name: 'notifications',
        component: Notifications
      },
      {
        path: 'icons',
        name: 'icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'maps',
        component: Maps
      },
      {
        path: 'typography',
        name: 'typography',
        component: Typography
      },
      {
        path: 'stable',
        name: 'stable',
        component: stable
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
