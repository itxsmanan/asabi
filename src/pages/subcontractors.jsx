import { Helmet } from 'react-helmet-async';

import { SubcontractorsView } from 'src/sections/subcontractors/view';

// ----------------------------------------------------------------------

export default function ContactUsPage() {
  return (
    <>
      <Helmet>
        <title> Subcontractors | ASABI </title>
      </Helmet>

      <SubcontractorsView />
    </>
  );
}
