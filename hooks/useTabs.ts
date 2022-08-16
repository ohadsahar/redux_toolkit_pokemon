import { useRouter } from 'next/router';

export const useTabs = () => {
  const router = useRouter();
  const handleNavigate = (path: string) => {
    router.push(path);
  };

  const getCurrentSelectedTab = () => {
    return router.pathname;
  };

  return { handleNavigate, getCurrentSelectedTab };
};
