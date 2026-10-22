import React from 'react';
import { Calendar, CheckCircle, TrendingUp, PackageCheck } from 'lucide-react';
import { experiences } from '../data/portfolioData';

// Direct import of generated image asset
import automotivePartsImg from '../assets/images/automotive_precision_parts_1792676222610.jpg';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experiences" className="py-16 sm:py-24 bg-[#fafafa] border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Presentation Chapter 03 */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-zinc-500 uppercase mb-2">
            <span>03</span>
            <span aria-hidden="true" className="text-zinc-300">·</span>
            <span>PARCOURS PROFESSIONNEL & RÉSULTATS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-950 tracking-tight text-balance">
            Expériences professionnelles
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
            De la rigueur opérationnelle sur les flux logistiques à la négociation commerciale en face-à-face, 
            chaque mission a renforcé ma capacité à créer de la valeur et à sécuriser la satisfaction client.
          </p>
        </div>

        {/* Experience Timeline Presentation Cards */}
        <div className="space-y-10">
          
          {/* Card 1: Garage Khan (Assistant commercial) */}
          <div className="bg-white border border-zinc-200 rounded-3xl overflow-hidden hover:border-zinc-400 hover:shadow-md transition-all duration-300 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* Left/Main Column */}
              <div className="p-6 sm:p-8 lg:p-10 lg:col-span-7 flex flex-col justify-between">
                <div>
                  {/* Period & Type unboxed */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-zinc-700 mb-3">
                    <span className="flex items-center gap-1.5 text-zinc-900">
                      <Calendar className="w-3.5 h-3.5 text-zinc-600" />
                      <span>{experiences[0].period}</span>
                    </span>
                    <span aria-hidden="true" className="text-zinc-300">·</span>
                    <span className="text-zinc-600">{experiences[0].type}</span>
                    <span aria-hidden="true" className="text-zinc-300">·</span>
                    <span className="text-zinc-600">{experiences[0].location}</span>
                  </div>

                  {/* Title & Company */}
                  <h3 className="text-2xl font-bold text-zinc-950 tracking-tight">
                    {experiences[0].role}
                  </h3>
                  <div className="text-lg font-bold text-zinc-800 mb-4">
                    {experiences[0].company}
                  </div>

                  <p className="text-sm text-zinc-600 leading-relaxed mb-6 font-normal">
                    {experiences[0].description}
                  </p>

                  {/* Achievements List */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                      Missions clés & Réalisations :
                    </h4>
                    <ul className="space-y-2.5">
                      {experiences[0].achievements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                          <CheckCircle className="w-4 h-4 text-zinc-900 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Skills tags and KPI Strip */}
                <div className="pt-6 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2 text-xs text-zinc-600">
                    {experiences[0].skills.map((skill, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-zinc-100 border border-zinc-200 rounded-md text-zinc-800 font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2.5 bg-zinc-950 text-white px-3.5 py-1.5 rounded-xl shadow-xs">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold tabular-nums">
                      65% conversion devis · 280 € panier moyen
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual context with automotive precision parts */}
              <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full bg-zinc-100 border-t lg:border-t-0 lg:border-l border-zinc-200 flex flex-col">
                <img
                  src={automotivePartsImg}
                  alt="Pièces mécaniques automobiles de précision et univers de Garage Khan"
                  className="w-full h-full object-cover object-center max-h-[360px] lg:max-h-none opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-zinc-200 text-xs shadow-sm">
                  <span className="font-bold text-zinc-950 block">Secteur Automobile & Pièces détachées</span>
                  <span className="text-zinc-600 text-[11px]">Relation client, gestion des stocks et négociation équipementiers</span>
                </div>
              </div>

            </div>
          </div>

          {/* Card 2: Akar Ulker (Employé logistique) */}
          <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 lg:p-10 hover:border-zinc-400 hover:shadow-md transition-all duration-300 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-8 space-y-4">
                {/* Period & Type unboxed */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-zinc-700">
                  <span className="flex items-center gap-1.5 text-zinc-900">
                    <Calendar className="w-3.5 h-3.5 text-zinc-600" />
                    <span>{experiences[1].period}</span>
                  </span>
                  <span aria-hidden="true" className="text-zinc-300">·</span>
                  <span className="text-zinc-600">{experiences[1].type}</span>
                  <span aria-hidden="true" className="text-zinc-300">·</span>
                  <span className="text-zinc-600">{experiences[1].location}</span>
                </div>

                {/* Title & Company */}
                <div>
                  <h3 className="text-2xl font-bold text-zinc-950 tracking-tight">
                    {experiences[1].role}
                  </h3>
                  <div className="text-lg font-bold text-zinc-800">
                    {experiences[1].company}
                  </div>
                </div>

                <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                  {experiences[1].description}
                </p>

                {/* Achievements List */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Missions & Savoir-faire opérationnel :
                  </h4>
                  <ul className="space-y-2.5">
                    {experiences[1].achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                        <CheckCircle className="w-4 h-4 text-zinc-900 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills tags */}
                <div className="pt-4 flex flex-wrap gap-2 text-xs text-zinc-600">
                  {experiences[1].skills.map((skill, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-zinc-100 border border-zinc-200 rounded-md text-zinc-800 font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Key Logistics Takeaway for Sales */}
              <div className="lg:col-span-4 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 space-y-4 shadow-xs">
                <div className="flex items-center gap-2.5 text-zinc-900 font-bold">
                  <PackageCheck className="w-5 h-5 shrink-0 text-zinc-800" />
                  <span className="text-xs uppercase tracking-wider">Pourquoi c'est un atout commercial ?</span>
                </div>

                <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                  La logistique est l'antichambre de la vente. Elle apprend la vérité du terrain : un client n'achète pas seulement un produit, il achète une promesse de livraison tenue.
                </p>

                <div className="space-y-2.5 pt-2 border-t border-zinc-200 text-xs">
                  <div className="flex items-center justify-between text-zinc-700">
                    <span className="text-zinc-500">Durée d'expérience :</span>
                    <span className="font-bold text-zinc-950">14 mois continus</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-700">
                    <span className="text-zinc-500">Rigueur d'exécution :</span>
                    <span className="font-bold text-emerald-700">Zéro litige d'expédition</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-700">
                    <span className="text-zinc-500">Coordination d'équipe :</span>
                    <span className="font-bold text-zinc-950">Transversale (quai & transport)</span>
                  </div>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-zinc-200 text-[11px] text-zinc-600 italic">
                  « La logistique m'a inculqué la discipline que j'applique aujourd'hui dans mes devis et mes relances clients. »
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
