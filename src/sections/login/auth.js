// useAuth.js
import { useEffect } from 'react';

import { useRouter } from 'src/routes/hooks';

const useRedirectIfAuthenticated = () => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated) {
      router.push('/dashboard'); // Redirect to a protected page
    }
  }, [router]);
};

export default useRedirectIfAuthenticated;
