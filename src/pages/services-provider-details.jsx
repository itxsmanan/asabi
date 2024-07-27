import { Helmet } from 'react-helmet-async';

import { UserDetails } from 'src/sections/userDetails/view';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> Services Provider Details | ASABI </title>
      </Helmet>

      <UserDetails />
    </>
  );
}
