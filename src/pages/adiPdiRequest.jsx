import { Helmet } from 'react-helmet-async';

import { AdiPdiRequestPage } from 'src/sections/adiPdiRequest/view';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> Services Provider | ASABI </title>
      </Helmet>

      <AdiPdiRequestPage />
    </>
  );
}
