import React from 'react';
import { CheckCircle2, TrendingUp, ShieldCheck, Zap, Globe2, Trophy, ArrowRight } from 'lucide-react';
import { recruiterReviewPoints } from '../data/portfolioData';

export const RecruiterReview: React.FC = () => {
  const iconMap = [
    <ShieldCheck className="w-5 h-5 text-emerald-600" />,
    <TrendingUp className="w-5 h-5 text-emerald-600" />,
    <Zap className="w-5 h-5 text-emerald-600" />,
    <Globe2 className="w-5 h-5 text-emerald-600" />
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#fafafa] border-b border-zinc-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header - Presentation Chapter 01 */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-800 uppercase mb-2">
            <span>01</span>
            <span aria-hidden="true" className="text-zinc-300">·</span>
            <span>ANALYSE COMMERCIALE & FORCES CLÉS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight text-balance">
            Ce que les directeurs commerciaux et partenaires retiennent de mon profil
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
            Un profil commercial solide ne se résume pas à un discours. Il repose sur la rigueur du terrain, 
            des métriques de transformation concrètes et une éthique de travail sans faille.
          </p>
        </div>

        {/* 4 Pillars Grid in Presentation Card Format */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recruiterReviewPoints.map((point, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-zinc-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header of card with icon, title and status */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-2.5 rounded-2xl bg-emerald-50 border border-emerald-100 shadow-2xs shrink-0 group-hover:scale-105 transition-transform">
                    {iconMap[index]}
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-extrabold text-emerald-700 tracking-wide block">
                      {point.badge}
                    </span>
                    <span className="text-[11px] text-zinc-500 font-semibold">
                      {point.verdict}
                    </span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-zinc-950 mb-2.5 group-hover:text-emerald-700 transition-colors">
                  {point.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {point.summary}
                </p>
              </div>

              {/* Impact Callout */}
              <div className="mt-5 pt-4 border-t border-zinc-100 flex items-start gap-2.5 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-zinc-600">
                  <strong className="text-zinc-950 font-semibold">Valeur ajoutée :</strong> {point.impact}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Presentation Takeaway Banner */}
        <div className="mt-8 p-6 sm:p-7 rounded-3xl bg-zinc-950 text-white border border-zinc-800 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-sm shrink-0">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-extrabold text-white">Disponible pour projets commerciaux & collaborations B2B</h4>
              <p className="text-xs text-zinc-400">Prêt à apporter ma rigueur et mon énergie à vos défis de vente et négociation.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-3 text-xs font-bold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl whitespace-nowrap transition-all flex items-center gap-2 shadow-sm cursor-pointer shrink-0"
          >
            <span>Prendre contact</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
