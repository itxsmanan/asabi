import { Helmet } from 'react-helmet-async';

import { ServicesView } from 'src/sections/services/view';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> Services | ASABI </title>
      </Helmet>

      <ServicesView />
    </>
  );
}
