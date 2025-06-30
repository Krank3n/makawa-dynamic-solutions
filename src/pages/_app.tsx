
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatWindow from '@/components/ChatWindow';
import { ChatIcon, COMPANY_NAME } from '@/constants';

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

    useEffect(() => {
        // Check if there's a stored preference
        const storedDarkMode = localStorage.getItem('darkMode');

        if (storedDarkMode !== null) {
            // User has a stored preference, use it
            const isDark = storedDarkMode === 'true';
            setDarkMode(isDark);
            if (isDark) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        } else {
            // First-time visitor, default to light mode
            setDarkMode(false);
            document.documentElement.classList.remove('dark');
            // Optionally store the default preference
            localStorage.setItem('darkMode', 'false');
        }
    }, []);

    const toggleDarkMode = useCallback(() => {
        setDarkMode(prevMode => {
            const newMode = !prevMode;
            // Persist the user's choice
            localStorage.setItem('darkMode', String(newMode));
            // Update the DOM
            if (newMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            return newMode;
        });
    }, []);

  return (
    <div className={`bg-white dark:bg-charcoal-deep text-charcoal-deep dark:text-gray-warm min-h-screen font-sans transition-colors duration-500 overflow-x-hidden`}>
      <Head>
        <title>Makawa Dynamic Solutions - Construction & Maintenance</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={`A modern, professional construction website for ${COMPANY_NAME}, showcasing their construction and maintenance services in Australia. Features 2025 design trends, interactive elements, and a focus on reliability and quality.`} />
      </Head>
      
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
      
      {/*<div className="fixed bottom-6 right-6 z-50">*/}
      {/*  <button*/}
      {/*    onClick={() => setIsChatOpen(prev => !prev)}*/}
      {/*    aria-label={isChatOpen ? "Close Live Chat" : "Open Live Chat"}*/}
      {/*    className="p-4 bg-orange-vibrant text-white rounded-full shadow-xl hover:bg-yellow-golden focus:outline-none focus:ring-2 focus:ring-orange-vibrant focus:ring-opacity-50 transform transition-all hover:scale-110"*/}
      {/*  >*/}
      {/*    <ChatIcon className="w-6 h-6" />*/}
      {/*  </button>*/}
      {/*</div>*/}
      {/*<ChatWindow isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />*/}
    </div>
  );
}

export default MyApp;
