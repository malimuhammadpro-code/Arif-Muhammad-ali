import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenCvModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCvModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-100 border-t border-zinc-200 py-12 text-xs text-zinc-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-zinc-200">
          
          <div>
            <div className="text-base font-bold text-zinc-950 tracking-tight flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
              <span>{personalInfo.name}</span>
            </div>
            <p className="mt-1 text-zinc-600 text-xs max-w-md">
              {personalInfo.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-zinc-600 text-xs font-semibold">
            <a href="#presentation" className="hover:text-emerald-700 transition-colors">
              Présentation
            </a>
            <a href="#methode" className="hover:text-emerald-700 transition-colors">
              Méthode
            </a>
            <a href="#experiences" className="hover:text-emerald-700 transition-colors">
              Expériences
            </a>
            <a href="#competences" className="hover:text-emerald-700 transition-colors">
              Compétences
            </a>
            <a href="#formation" className="hover:text-emerald-700 transition-colors">
              Formation
            </a>
            <a href="#simulateur" className="hover:text-emerald-700 transition-colors">
              Simulateur
            </a>
            <button
              onClick={onOpenCvModal}
              className="text-emerald-700 hover:text-emerald-800 hover:underline font-bold cursor-pointer"
            >
              Consulter le CV (PDF)
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-700 hover:text-emerald-700 hover:bg-zinc-50 transition-colors flex items-center gap-1.5 cursor-pointer shrink-0 shadow-xs"
            aria-label="Retour en haut de page"
          >
            <ArrowUp className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-semibold">Haut de page</span>
          </button>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Arif Muhammad Ali · Portfolio Professionnel. Tous droits réservés.
          </div>
          <div className="flex items-center gap-4">
            <span>{personalInfo.location}</span>
            <span>·</span>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-emerald-700">
              {personalInfo.email}
            </a>
            <span>·</span>
            <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="hover:text-emerald-700">
              {personalInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
