'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
  { name: 'Pricing', href: '/pricing' },
  { name: 'Features', href: '/features' },
  { name: 'Enterprise', href: '/enterprise' },
  { name: 'Blog', href: '/blog' },
  { name: 'Forum', href: '/forum' },
  { name: 'Careers', href: '/careers' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Replace the direct window event listener with useEffect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    // Add event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="h-8 w-8 md:h-10 md:w-10 relative">
                <Image src="/logo.png" alt="Xen.ai Logo" width={40} height={40} />
              </div>
              <span className="text-xl md:text-2xl font-bold">XEN.AI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium uppercase tracking-wide text-white/80 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-6">
            <Link href="/api/auth/login" className="hidden md:inline-block text-base font-medium uppercase tracking-wide text-white/80 hover:text-white transition-colors">
              SIGN IN
            </Link>
            <Link href="/downloads">
              <Button className="cursor-btn cursor-btn-primary flex items-center space-x-2 px-6 py-2.5 text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M11.47 1.72a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 01-1.06-1.06l3-3zM11.25 7.5V15a.75.75 0 001.5 0V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z" />
                </svg>
                <span>OPEN EDITOR</span>
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black p-0">
                <div className="flex flex-col h-full p-6">
                  <div className="flex flex-col space-y-6 mt-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="text-lg text-white/80 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                    <Link href="/api/auth/login" className="text-lg text-white/80 hover:text-white transition-colors">
                      Sign In
                    </Link>
                    <Link href="/downloads">
                      <Button className="w-full cursor-btn cursor-btn-primary mt-4">
                        Open Editor
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
