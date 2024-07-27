import { Helmet } from 'react-helmet-async';

import { ContactUs } from 'src/sections/contact/view';

// ----------------------------------------------------------------------

export default function ContactUsPage() {
  return (
    <>
      <Helmet>
        <title> Contact-Us | ASABI </title>
      </Helmet>

      <ContactUs />
    </>
  );
}
