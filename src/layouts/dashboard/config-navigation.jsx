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
    title: 'ADI/PDI Requests',
    path: '/adiPdiRequest',
    icon: icon('ic_request'),
  },
  {
    title: 'customers',
    path: '/customer',
    icon: icon('ic_customer'),
  },
  {
    title: 'services',
    path: '/services',
    icon: icon('ic_services'),
  },
  {
    title: 'announcement',
    path: '/announcement',
    icon: icon('ic_announcement'),
  },
  {
    title: 'contact us',
    path: '/contact',
    icon: icon('ic_contact'),
  },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
