import { Helmet } from 'react-helmet-async';

import { AppView } from 'src/sections/overview/view';

import useRedirectIfAuthenticated from '../sections/login/auth';
// ----------------------------------------------------------------------

export default function AppPage() {
  useRedirectIfAuthenticated();
  return (
    <>
      <Helmet>
        <title> Dashboard | ASABI </title>
      </Helmet>

      <AppView />
    </>
  );
}
