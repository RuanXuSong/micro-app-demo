import { useState, useEffect } from 'react';

export default function useLoading(appName: string) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const myApp = document.querySelector(`micro-app[name=${appName}]`);
    console.log('appName: ', appName);
    console.log('myApp: ', myApp);
    myApp?.addEventListener('mounted', () => {
      console.log('mounted');
      setLoading(false);
    });
  }, []);

  return {
    loading,
  };
}
