// useTawkToPersistent.ts
import { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

let scriptInjected = false;

type TawkUser = {
  name?: string;
  email?: string;
  userId?: string;
};

export function useTawkToPersistent(propertyId: string, user?: TawkUser) {
  // 1️⃣ Load script once
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (scriptInjected) return;

    scriptInjected = true;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://embed.tawk.to/${propertyId}/default`;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    script.id = 'tawk-script';

    document.body.appendChild(script);
  }, [propertyId]);

  // 2️⃣ Update user whenever it changes
  useEffect(() => {
    if (!user) return;
    if (typeof window === 'undefined') return;

    const trySetUser = () => {
      if (window.Tawk_API?.setAttributes) {
        window.Tawk_API.setAttributes(user, (error: any) => {
          if (error) console.error('Tawk error:', error);
        });
      }
    };

    // If Tawk already loaded
    trySetUser();

    // If not yet loaded, wait for it
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_API.onLoad = trySetUser;
  }, [user]);
}
