import HomePage from '../page/HomePage';
import ContactPage from '../page/ContactPage';

export const RouteNames = {
  HOME: 'home',
  CONTACT: 'contact',
};

export default [
  {
    path: '/',
    component: HomePage,
    name: RouteNames.HOME,
  },
  {
    path: '/contact',
    component: ContactPage,
    name: RouteNames.CONTACT,
  },
];
