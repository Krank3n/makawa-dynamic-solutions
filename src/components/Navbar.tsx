import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { NAV_LINKS, COMPANY_NAME, DarkModeIcon, LightModeIcon, PhoneIcon, EmailIcon, COMPANY_PHONE, COMPANY_EMAIL } from '@/constants';

interface NavbarProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const genericHamburgerLine = `h-0.5 w-6 my-1 rounded-full bg-charcoal-deep dark:bg-white transition ease transform duration-300`;

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-charcoal-deep/80 backdrop-blur-md shadow-lg py-3' : 'py-4'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">

                    <Link href="/" className="hover:opacity-80 transition-opacity duration-300 flex gap-2 items-center text-white">
                        <img
                            src="/images/makawa-icon-blue.svg"
                            alt={COMPANY_NAME}
                            className="h-8 md:h-10 w-auto hidden dark:block"
                        />
                        <img
                            src="/images/makawa-logo.svg"
                            alt={COMPANY_NAME}
                            className="h-8 md:h-10 w-auto dark:hidden"
                        />

                        <span className="hidden lg:block text-charcoal dark:text-white">
                        {COMPANY_NAME.split(' ')[0]} <span className="text-blue-steel">{COMPANY_NAME.split(' ').slice(1).join(' ')}</span>
                        </span>
                    </Link>

                    {/* Desktop Nav & Contact Info */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <nav className="space-x-6">
                            {NAV_LINKS.map(link => (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    className="text-charcoal-deep dark:text-gray-warm hover:text-orange-vibrant dark:hover:text-orange-vibrant font-medium transition-colors duration-300 relative group"
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-vibrant transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                        </nav>
                        <div className="flex items-center space-x-4">
                            <a href={`tel:${COMPANY_PHONE}`} className="flex items-center text-charcoal-deep dark:text-gray-warm hover:text-orange-vibrant dark:hover:text-orange-vibrant transition-colors">
                                <PhoneIcon className="w-4 h-4 mr-1.5" /> {COMPANY_PHONE}
                            </a>
                            <button
                                onClick={toggleDarkMode}
                                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                                className="p-2 rounded-full hover:bg-gray-warm/20 dark:hover:bg-gray-warm/10 transition-colors"
                            >
                                {darkMode ? <LightModeIcon className="text-yellow-golden" /> : <DarkModeIcon className="text-charcoal-deep" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Nav Toggle */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={toggleDarkMode}
                            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                            className="p-2 mr-2 rounded-full hover:bg-gray-warm/20 dark:hover:bg-gray-warm/10 transition-colors"
                        >
                            {darkMode ? <LightModeIcon className="text-yellow-golden" /> : <DarkModeIcon className="text-charcoal-deep" />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex flex-col h-10 w-10 border-2 border-charcoal-deep dark:border-white rounded justify-center items-center group"
                            aria-label="Toggle menu"
                        >
                            <div className={`${genericHamburgerLine} ${isOpen ? "rotate-45 translate-y-2 group-hover:opacity-100" : "group-hover:opacity-100"}`} />
                            <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "group-hover:opacity-100"}`} />
                            <div className={`${genericHamburgerLine} ${isOpen ? "-rotate-45 -translate-y-1.5 group-hover:opacity-100" : "group-hover:opacity-100"}`} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-white/95 dark:bg-charcoal-deep/95 backdrop-blur-lg transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-40 pt-20 overflow-y-auto`}
            >
                <nav className="flex flex-col items-center space-y-6 py-8">
                    {NAV_LINKS.map(link => (
                        <a
                            key={link.id}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-medium text-charcoal-deep dark:text-white hover:text-orange-vibrant dark:hover:text-orange-vibrant transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="mt-8 pt-6 border-t border-gray-warm/30 w-4/5 text-center space-y-4">
                        <a href={`tel:${COMPANY_PHONE}`} className="flex items-center justify-center text-lg text-charcoal-deep dark:text-gray-warm hover:text-orange-vibrant dark:hover:text-orange-vibrant transition-colors">
                            <PhoneIcon className="w-5 h-5 mr-2" /> {COMPANY_PHONE}
                        </a>
                        <a href={`mailto:${COMPANY_EMAIL}`} className="flex items-center justify-center text-lg text-charcoal-deep dark:text-gray-warm hover:text-orange-vibrant dark:hover:text-orange-vibrant transition-colors">
                            <EmailIcon className="w-5 h-5 mr-2" /> {COMPANY_EMAIL}
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;