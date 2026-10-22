import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { educations } from '../data/portfolioData';

// Direct import of generated boardroom/business negotiation image
import negotiationBannerImg from '../assets/images/business_negotiation_banner_1792676223180.jpg';

export const EducationSection: React.FC = () => {
  return (
    <section id="formation" className="py-16 sm:py-24 bg-[#fafafa] border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Presentation Chapter 05 */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-zinc-500 uppercase mb-2">
            <span>05</span>
            <span aria-hidden="true" className="text-zinc-300">·</span>
            <span>FORMATION & CERTIFICATIONS D'ÉTAT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Un socle académique spécialisé dans la négociation complexe
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Formé au sein de la référence des écoles de vente B2B en France (Euridis Business School), 
            avec une certification d'État en tant que Négociateur Technico-Commercial.
          </p>
        </div>

        {/* Education Grid with Image Highlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Education Cards */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            {educations.map((edu, idx) => (
              <div
                key={edu.id}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-sky-100 hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-sky-700">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.period}</span>
                    </span>
                    <span className="text-xs text-slate-500 font-mono font-semibold">
                      {idx === 0 ? 'En cours (Bac+3)' : 'Diplôme certifié'}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
                    {edu.degree}
                  </h3>
                  <div className="text-base font-bold text-sky-700 mb-3 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-sky-600" />
                    <span>{edu.school}</span>
                  </div>

                  {edu.description && (
                    <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed font-normal">
                      {edu.description}
                    </p>
                  )}

                  {edu.keyLearnings && (
                    <div className="space-y-2 pt-3 border-t border-slate-200">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                        Modules & Compétences acquises :
                      </span>
                      <ul className="space-y-1.5">
                        {edu.keyLearnings.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 flex flex-col justify-between relative group shadow-xs">
            <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
              <img
                src={negotiationBannerImg}
                alt="Environnement d'affaires et de négociation Euridis Business School"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-slate-200 px-3 py-1.5 rounded-xl text-xs font-bold text-sky-700 flex items-center gap-1.5 shadow-xs">
                <Award className="w-3.5 h-3.5" />
                <span>Euridis Business School · Paris</span>
              </div>
            </div>

            <div className="p-6 sm:p-7 space-y-3">
              <h4 className="text-base font-bold text-slate-900">
                Pourquoi Euridis fait la différence ?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Euridis forme les meilleurs ingénieurs commerciaux et négociateurs de France. La pédagogie est 100% axée sur les cas réels de négociation B2B, le traitement des objections de haut niveau et la prospection sur des cycles de vente stratégiques.
              </p>
              <div className="pt-2 text-xs text-zinc-950 font-bold flex items-center gap-1">
                <span>Cursus d'excellence tourné vers la pratique terrain</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
