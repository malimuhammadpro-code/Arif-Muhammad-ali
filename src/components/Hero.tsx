import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ArrowRight, Download, Award, TrendingUp, CheckCircle2, ChevronRight } from 'lucide-react';
import { personalInfo, metrics } from '../data/portfolioData';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [imgError, setImgError] = useState(false);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section id="presentation" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-zinc-200/80 bg-gradient-to-b from-emerald-50/40 via-[#fafafa] to-[#fafafa]">
      {/* Modern architectural dot grid matrix */}
      <div 
        className="absolute inset-0 opacity-[0.14] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#10b981 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Atmospheric modern emerald lighting orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-gradient-to-tr from-emerald-200/20 via-teal-100/30 to-emerald-100/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-44 -right-20 w-96 h-96 bg-emerald-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Split Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy & Confidence */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Professional Identity Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-emerald-200 shadow-xs text-zinc-900 text-xs font-bold w-fit mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="uppercase tracking-wider font-extrabold text-[11px] text-emerald-800">
                Commercial & Négociateur B2B · Euridis Business School
              </span>
            </div>

            {/* Main Headline with Emerald Accent */}
            <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold tracking-tight text-zinc-950 leading-[1.14] mb-5 max-w-2xl text-balance">
              L'alliance de la <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent">rigueur logistique</span> et du closing commercial.
            </h1>

            {/* High-Impact Presentation Bio */}
            <p className="text-base sm:text-lg text-zinc-700 leading-relaxed mb-6 max-w-2xl font-normal">
              Je m’appelle <strong className="text-zinc-950 font-bold">Arif Muhammad Ali</strong>. 
              Mon parcours mêle vente consultative, relation client et logistique. 
              J’ai appris le métier par la pratique : 
              <span className="bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold px-2 py-0.5 rounded-md mx-1 inline-block">
                14 mois d'organisation des flux et zéro litige
              </span> 
              chez Akar Ulker, suivis de 
              <span className="bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold px-2 py-0.5 rounded-md mx-1 inline-block">
                65 % de devis transformés
              </span> 
              au Garage Khan.
            </p>

            {/* Direct Contact Bar */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-zinc-600 mb-8 pt-3 border-t border-zinc-200">
              <div className="flex items-center gap-1.5 text-zinc-900 font-semibold">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <span aria-hidden="true" className="text-zinc-300">·</span>
              <button
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="flex items-center gap-1.5 hover:text-emerald-700 transition-colors group cursor-pointer"
                title="Cliquer pour copier l'email"
              >
                <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-zinc-900 font-semibold">{personalInfo.email}</span>
                {copiedType === 'email' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600 ml-1" />
                ) : (
                  <Copy className="w-3 h-3 text-zinc-400 group-hover:text-emerald-700 ml-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </button>
              <span aria-hidden="true" className="text-zinc-300">·</span>
              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="flex items-center gap-1.5 hover:text-emerald-700 transition-colors group cursor-pointer"
                title="Cliquer pour copier le téléphone"
              >
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-zinc-900 font-semibold">{personalInfo.phone}</span>
                {copiedType === 'phone' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600 ml-1" />
                ) : (
                  <Copy className="w-3 h-3 text-zinc-400 group-hover:text-emerald-700 ml-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </button>
            </div>

            {/* Presentation CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-md shadow-emerald-600/20 group cursor-pointer"
              >
                <span>Prendre contact</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenCvModal}
                className="px-5 py-3.5 text-sm font-bold text-zinc-800 bg-white hover:bg-zinc-50 border border-zinc-200 rounded-xl transition-all flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <Download className="w-4 h-4 text-emerald-600" />
                <span>Consulter le CV (PDF)</span>
              </button>

              <a
                href="#methode"
                className="px-4 py-3.5 text-sm font-bold text-zinc-700 hover:text-emerald-700 transition-colors flex items-center gap-1"
              >
                <span>Découvrir ma méthode</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Frame with Real Profile Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Floating badges */}
              <div className="absolute -top-3 -left-4 z-20 bg-white border border-emerald-200 shadow-md rounded-2xl px-3.5 py-2 flex items-center gap-2.5 text-xs font-bold text-zinc-900">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span>Île-de-France · Mobilité B2B</span>
              </div>

              <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-20 bg-white border border-emerald-200 shadow-xl rounded-2xl px-4 py-3 text-xs text-zinc-900">
                <div className="font-extrabold text-emerald-600 text-base">
                  65 %
                </div>
                <div className="text-[11px] text-zinc-500 font-semibold">Closing mesuré</div>
              </div>

              {/* Main Presentation Card */}
              <div className="relative p-7 sm:p-9 bg-white border border-zinc-200 rounded-3xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)]">
                
                {/* Photo showcase with elegant emerald ring */}
                <div className="relative mx-auto w-44 h-44 sm:w-52 sm:h-52 mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-400 via-teal-500 to-emerald-600 p-1.5 shadow-[0_0_35px_rgba(16,185,129,0.25)] transition-all duration-500">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center ring-4 ring-white">
                      <img
                        src={imgError ? personalInfo.cloudinaryFallbackUrl : personalInfo.avatarUrl}
                        alt="Photo de profil Arif Muhammad Ali"
                        referrerPolicy="no-referrer"
                        onError={() => setImgError(true)}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>

                  {/* Certified badge */}
                  <div className="absolute bottom-1 right-2 bg-emerald-600 text-white rounded-full p-2 shadow-md ring-2 ring-white" title="Profil vérifié">
                    <Award className="w-4 h-4" />
                  </div>
                </div>

                {/* Identity info */}
                <div className="text-center space-y-1 mb-5">
                  <h2 className="text-xl font-extrabold text-zinc-950 tracking-tight">{personalInfo.name}</h2>
                  <p className="text-xs text-emerald-700 font-extrabold uppercase tracking-wider">
                    Bachelor Vente & Négociation B2B
                  </p>
                  <p className="text-xs text-zinc-500 font-medium">Euridis Business School · Val-d’Oise (95)</p>
                </div>

                {/* Specification Box */}
                <div className="bg-zinc-50 rounded-2xl p-4 border border-zinc-200 space-y-2.5 text-xs">
                  <div className="flex items-center justify-between text-zinc-700">
                    <span className="text-zinc-500 font-medium">Spécialisation :</span>
                    <span className="font-bold text-zinc-950">Vente Consultative & B2B</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-700">
                    <span className="text-zinc-500 font-medium">Closing validé :</span>
                    <span className="font-extrabold text-emerald-700">65 % des devis</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-700">
                    <span className="text-zinc-500 font-medium">Panier moyen :</span>
                    <span className="font-bold text-zinc-950">280 € HT (pièces auto)</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-700">
                    <span className="text-zinc-500 font-medium">Langues de négociation :</span>
                    <span className="font-semibold text-zinc-800">Français · Ourdou · Anglais C1</span>
                  </div>
                </div>

                {/* Direct quick call link */}
                <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span className="font-bold text-zinc-800">Profil opérationnel</span>
                  </div>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-emerald-700 hover:text-emerald-800 font-bold underline"
                  >
                    Appeler
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Full-width 4-column KPI strip */}
        <div className="mt-14 pt-10 border-t border-zinc-200 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-950 tracking-tight tabular-nums block group-hover:scale-105 transition-transform origin-left">
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    {metric.value.split(' ')[0]}
                  </span>
                  {metric.value.split(' ').slice(1).join(' ') && ` ${metric.value.split(' ').slice(1).join(' ')}`}
                </span>
                <span className="text-xs sm:text-sm font-bold text-zinc-800 mt-1 block">
                  {metric.label}
                </span>
              </div>
              <span className="text-[11px] text-zinc-500 mt-2 block border-t border-zinc-100 pt-2 font-medium">
                {metric.context}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
