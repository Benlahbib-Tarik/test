// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'users',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'organizations',
    path: '/dashboard/organization',
    icon: icon('ic_cart'),
  },
  {
    title: 'sites',
    path: '/dashboard/sites',
    icon: icon('ic_blog'),
  },
  {
    title: 'process',
    path: '/process',
    icon: icon('ic_lock'),
  },
  {
    title: 'audit',
    path: '/audit',
    icon: icon('ic_lock'),
  },
  {
    title: 'settings',
    path: '/settings',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
