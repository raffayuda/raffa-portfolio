// components/providers.tsx
'use client';

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import CustomCursor from './custom-cursor';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <CustomCursor />
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
}
