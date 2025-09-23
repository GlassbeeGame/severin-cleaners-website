'use client';

import { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function PWAInstaller() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Listen for the appinstalled event
    window.addEventListener('appinstalled', () => {
      console.log('PWA was installed');
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }

    // Clear the deferredPrompt
    setDeferredPrompt(null);
    setShowInstallPrompt(false);
  };

  // Don't show install prompt on mobile Safari or if already installed
  if (!showInstallPrompt || typeof window === 'undefined') {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-sm">
      <div className="bg-white border border-border rounded-lg shadow-lg p-4">
        <div className="flex items-start gap-3">
          <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
            <span className="text-primary text-lg">📱</span>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-neutral-dark text-sm mb-1">
              Install App
            </h3>
            <p className="text-neutral text-xs mb-3">
              Install Severin Cleaners for quick access to our services.
            </p>
            <div className="flex gap-2">
              <button
                onClick={handleInstallClick}
                className="bg-primary hover:bg-primary-dark text-white text-xs font-medium py-2 px-3 rounded touch-target transition-colors duration-200"
              >
                Install
              </button>
              <button
                onClick={() => setShowInstallPrompt(false)}
                className="bg-neutral-light hover:bg-neutral text-neutral-dark text-xs font-medium py-2 px-3 rounded touch-target transition-colors duration-200"
              >
                Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
