import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/components/About.vue'),
  },
  {
    path: '/cabinet',
    name: 'Cabinet',
    component: () => import('@/components/Cabinet.vue'),
  },
  {
    path: '/location',
    name: 'Location',
    component: () => import('@/components/Location.vue'),
  },
  {
    path: '/cart',
    name: 'Cart',
    // component: () => import('@/components/Cart.vue'),
    component: () => import('@/components/Cart/Cart.vue'),
  },
  {
    path: '/product-details/:id',
    name: 'ProductDetails',
    component: () => import('@/components/Products/ProductDetails.vue'),
  },
  {
    path: '/category/:category',
    name: 'Category',
    component: () => import('@/components/Category.vue'),
  },
  {
    path: '/search-results',
    name: 'SearchResults',
    component: () => import('@/components/SearchResults.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/components/Register.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'Error',
    component: () => import('@/components/Error.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     return { x: 0, y: 0 }
  //   }
  // }

  // scrollBehavior() {
  //   return { x: 0, y: 0 }
  // }

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return { x: 0, y: 0 };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
