import { Helmet } from 'react-helmet-async';

import { NewServicePage } from 'src/sections/newService/view';

// ----------------------------------------------------------------------

export default function NewService() {
  return (
    <>
      <Helmet>
        <title> New Service | ASABI </title>
      </Helmet>

      <NewServicePage />
    </>
  );
}
