import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const DashBoard = lazy(() => import('src/pages/app'));
// export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const IndexPage = lazy(() => import('src/pages/login'));
export const CustomerPage = lazy(() => import('src/pages/customer'));
export const ServicesPage = lazy(() => import('src/pages/services'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { path: 'dashboard', element: <DashBoard /> },
        { path: 'servicesProvider', element: <UserPage /> },
        { path: 'customer', element: <CustomerPage /> },
        { path: 'services', element: <ServicesPage /> },
        // { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: '/',
      element: <IndexPage />,
      index: true,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
