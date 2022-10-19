import { useState, useEffect } from 'react';

export default function useLoading(appName: string) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const myApp = document.querySelector(`micro-app[name=${appName}]`);
    if (!myApp) {
      setLoading(false);
      return;
    }
    myApp?.addEventListener('mounted', () => {
      setLoading(false);
    });
  }, []);

  return {
    loading,
  };
}
