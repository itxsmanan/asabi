import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const DashBoard = lazy(() => import('src/pages/app'));
// export const BlogPage = lazy(() => import('src/pages/blog'));
export const Login = lazy(() => import('src/pages/login'));
export const UserPage = lazy(() => import('src/pages/user'));
export const IndexPage = lazy(() => import('src/pages/login'));
export const ServicesProviderDetails = lazy(() => import('src/pages/services-provider-details'));
export const CustomerPage = lazy(() => import('src/pages/customer'));
export const CustomerDetailsPage = lazy(() => import('src/pages/customer-details'));
export const ServicesPage = lazy(() => import('src/pages/services'));
export const NewServicePage = lazy(() => import('src/pages/newService'));
export const ContactUsPage = lazy(() => import('src/pages/contactUs'));
export const Subcontractors = lazy(() => import('src/pages/subcontractors'));
export const AnnouncementPage = lazy(() => import('src/pages/announcements'));
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
        {
          path: 'servicesProviderDetails/:id',
          component: <ServicesProviderDetails />,
          element: <ServicesProviderDetails />,
        },
        { path: 'customer', element: <CustomerPage /> },
        { path: 'customerDetails', element: <CustomerDetailsPage /> },
        { path: 'services', element: <ServicesPage /> },
        { path: 'newServicePage', element: <NewServicePage /> },
        { path: 'contact', element: <ContactUsPage /> },
        { path: 'announcement', element: <AnnouncementPage /> },
        { path: 'subContractorsView', element: <Subcontractors /> },
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
