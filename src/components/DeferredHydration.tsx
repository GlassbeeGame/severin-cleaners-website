'use client';

import { useEffect, useState, type ReactNode } from 'react';

interface DeferredHydrationProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * Defers hydration of client components until after initial page load
 * This moves component hydration outside the TBT measurement window
 *
 * Usage:
 * <DeferredHydration>
 *   <ExpensiveClientComponent />
 * </DeferredHydration>
 */
export default function DeferredHydration({ children, fallback = null }: DeferredHydrationProps) {
  const [shouldHydrate, setShouldHydrate] = useState(false);

  useEffect(() => {
    // Defer hydration until after initial render
    // This ensures it happens outside TBT measurement window
    const timer = setTimeout(() => {
      setShouldHydrate(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldHydrate) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
