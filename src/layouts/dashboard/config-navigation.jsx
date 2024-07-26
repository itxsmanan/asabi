import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Services Provider',
    path: '/servicesProvider',
    icon: icon('ic_user'),
  },
  {
    title: 'customers',
    path: '/customer',
    icon: icon('ic_cart'),
  },
  {
    title: 'services',
    path: '/services',
    icon: icon('ic_blog'),
  },
  {
    title: 'login',
    path: '/',
    icon: icon('ic_lock'),
  },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
