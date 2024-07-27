import { Helmet } from 'react-helmet-async';

import { AnnouncementsPage } from 'src/sections/announcements/view';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> Services Provider | ASABI </title>
      </Helmet>

      <AnnouncementsPage />
    </>
  );
}
