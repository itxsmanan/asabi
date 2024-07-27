import { Helmet } from 'react-helmet-async';

import { CustomerDetails } from 'src/sections/customersDetails/view';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> Services Provider Details | ASABI </title>
      </Helmet>

      <CustomerDetails />
    </>
  );
}
