'use client';
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const ResetScrollOnRouteChange: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
