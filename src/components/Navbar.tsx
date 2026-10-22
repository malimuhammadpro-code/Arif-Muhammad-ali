import React, { useState, useEffect } from 'react';
import { Mail, Phone, Download, Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Présentation', href: '#presentation' },
    { label: 'Méthode', href: '#methode' },
    { label: 'Expériences', href: '#experiences' },
    { label: 'Compétences', href: '#competences' },
    { label: 'Formation', href: '#formation' },
    { label: 'Simulateur', href: '#simulateur' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-zinc-200 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
          : 'bg-[#fafafa]/85 backdrop-blur-md border-b border-zinc-200/70 py-4'
      }`}
    >
      {/* Top Emerald Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 opacity-95" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg sm:text-xl font-extrabold tracking-tight text-zinc-950 hover:text-emerald-600 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2.5 group"
          >
            <div className="relative flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50"></span>
              <span className="absolute w-4 h-4 rounded-full bg-emerald-500/30 animate-ping pointer-events-none"></span>
            </div>
            <span>{personalInfo.name}</span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-zinc-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenCvModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-zinc-800 bg-white border border-zinc-200 rounded-xl hover:bg-zinc-50 hover:border-zinc-300 transition-all whitespace-nowrap shrink-0 shadow-2xs cursor-pointer"
              title="Consulter le CV original en PDF"
            >
              <Download className="w-3.5 h-3.5 text-emerald-600" />
              <span>CV PDF</span>
            </button>

            <a
              href="#contact"
              className="relative group overflow-hidden px-4.5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-md shadow-emerald-600/20 cursor-pointer"
            >
              <span>Me contacter</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-600 hover:text-zinc-950 focus:outline-none cursor-pointer"
              aria-label="Menu navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-zinc-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-zinc-700 hover:text-emerald-700 hover:bg-emerald-50/60 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-zinc-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold text-zinc-800 bg-zinc-50 border border-zinc-200 rounded-xl"
            >
              <Download className="w-4 h-4 text-emerald-600" />
              <span>Consulter le CV (PDF)</span>
            </button>
            <div className="flex items-center justify-center gap-4 pt-2 text-xs text-zinc-600 font-semibold">
              <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-emerald-700">
                <Phone className="w-3.5 h-3.5" />
                <span>{personalInfo.phone}</span>
              </a>
              <span>·</span>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 hover:text-emerald-700">
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
