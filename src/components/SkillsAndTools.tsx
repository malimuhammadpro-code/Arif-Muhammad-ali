import React, { useState } from 'react';
import { Target, Layers, Bot, Languages, Dumbbell, Sparkles, Check, Terminal, Zap } from 'lucide-react';
import { skillCategories, languages, sportsInterests } from '../data/portfolioData';

export const SkillsAndTools: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'sales' | 'tools' | 'ai'>('all');
  const [activeAiDemo, setActiveAiDemo] = useState<'prep' | 'objection' | 'crm'>('prep');

  const filteredCategories = skillCategories.filter((cat) => {
    if (activeTab === 'sales') return cat.category.includes('Vente');
    if (activeTab === 'tools') return cat.category.includes('Outils');
    if (activeTab === 'ai') return cat.category.includes('Intelligence');
    return true;
  });

  const aiUseCases = {
    prep: {
      prompt: "« Synthèse compte cible B2B : analyse des enjeux, volumétrie de flotte et points de friction potentiels avant appel de découverte. »",
      output: "Génération d'une fiche d'avant-vente avec 3 questions d'accroche ciblées. Gain de temps : 20 min par prospect qualifié.",
      badge: "Recherche & Ciblage Pré-Appel"
    },
    objection: {
      prompt: "« Formulation de 3 angles d'argumentation sur la valeur perçue pour un client hésitant sur le coût unitaire de pièces mécaniques. »",
      output: "Structure d'argumentation centrée sur le coût d'immobilisation d'un véhicule. Arif adapte le ton et valide les chiffres réels.",
      badge: "Aide à la Négociation"
    },
    crm: {
      prompt: "« Structuration des notes d'entretien téléphonique en compte-rendu normalisé pour mise à jour instantanée du pipeline HubSpot. »",
      output: "Intégration directe dans le CRM avec date de relance J+3 et points de vigilance. Zéro perte d'information.",
      badge: "Automatisation CRM"
    }
  };

  return (
    <section id="competences" className="py-16 sm:py-24 bg-[#fafafa] border-b border-zinc-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-800 uppercase mb-2">
            <span>04</span>
            <span aria-hidden="true" className="text-zinc-300">·</span>
            <span>STACK COMMERCIALE & OUTILS MÉTIER</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-950 tracking-tight text-balance">
            Une boîte à outils moderne au service de la performance
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
            Allier les fondamentaux de la négociation commerciale aux outils d'automatisation CRM et à l'intelligence artificielle pour maximiser le temps passé auprès des clients.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white border border-zinc-200 rounded-2xl w-fit mb-8 shadow-xs">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50'
            }`}
          >
            Toutes les compétences
          </button>
          <button
            onClick={() => setActiveTab('sales')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'sales'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50'
            }`}
          >
            Vente & Négociation
          </button>
          <button
            onClick={() => setActiveTab('tools')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'tools'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50'
            }`}
          >
            CRM & Bureautique
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'ai'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50'
            }`}
          >
            Intelligence Artificielle
          </button>
        </div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {filteredCategories.map((categoryGroup, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-zinc-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">
                  <span>0{idx + 1}</span>
                  <span aria-hidden="true" className="text-zinc-300">·</span>
                  <span>{categoryGroup.category}</span>
                </div>

                <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-emerald-700 transition-colors">
                  {categoryGroup.category}
                </h3>

                <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
                  {categoryGroup.description}
                </p>

                <div className="space-y-3">
                  {categoryGroup.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80 hover:bg-white hover:border-emerald-200 transition-all"
                    >
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-bold text-zinc-950">{item.name}</span>
                        {item.level && (
                          <span className="text-[11px] font-extrabold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                            {item.level}
                          </span>
                        )}
                      </div>
                      {item.detail && (
                        <p className="text-[11px] text-zinc-500 leading-tight">
                          {item.detail}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {categoryGroup.category.includes('Intelligence') && (
                <div className="mt-6 pt-4 border-t border-zinc-100 text-xs text-zinc-600 flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    Principe éthique : Contrôle systématique des données par l'humain. Zéro hallucination.
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Copilote IA Terminal */}
        <div className="mb-14 bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <span>Démonstration du Copilote IA Commercial</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 uppercase">
                    Claude & ChatGPT
                  </span>
                </h3>
                <p className="text-xs text-zinc-400">
                  Comment Arif démultiplie sa productivité pour consacrer 80 % de son temps aux rendez-vous clients
                </p>
              </div>
            </div>

            {/* Sub-tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-white/5 rounded-xl border border-white/10 text-xs">
              <button
                onClick={() => setActiveAiDemo('prep')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer font-semibold ${
                  activeAiDemo === 'prep' ? 'bg-emerald-500 text-zinc-950 font-bold' : 'text-zinc-300 hover:text-white'
                }`}
              >
                Pré-Appel
              </button>
              <button
                onClick={() => setActiveAiDemo('objection')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer font-semibold ${
                  activeAiDemo === 'objection' ? 'bg-emerald-500 text-zinc-950 font-bold' : 'text-zinc-300 hover:text-white'
                }`}
              >
                Argumentation
              </button>
              <button
                onClick={() => setActiveAiDemo('crm')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer font-semibold ${
                  activeAiDemo === 'crm' ? 'bg-emerald-500 text-zinc-950 font-bold' : 'text-zinc-300 hover:text-white'
                }`}
              >
                Sync CRM
              </button>
            </div>
          </div>

          {/* Terminal Console */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-6 bg-black/60 rounded-2xl p-4 sm:p-5 border border-white/10 font-mono text-xs text-zinc-300 space-y-2">
              <div className="flex items-center gap-1.5 text-zinc-500 pb-2 border-b border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                <span className="text-[11px] ml-2 text-zinc-400">prompt_commercial.sh</span>
              </div>
              <p className="text-emerald-400 font-semibold">{aiUseCases[activeAiDemo].prompt}</p>
            </div>

            <div className="lg:col-span-6 bg-white/5 rounded-2xl p-5 border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-emerald-400 font-bold uppercase tracking-wider text-[11px]">
                  {aiUseCases[activeAiDemo].badge}
                </span>
                <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
                  <Check className="w-3.5 h-3.5" />
                  Vérifié & Validé par Arif
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-normal">
                {aiUseCases[activeAiDemo].output}
              </p>
              <div className="pt-2 text-[11px] text-zinc-400 flex items-center gap-2 border-t border-white/10">
                <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Gain mesuré : préparation 3x plus rapide pour un échange humain ultra-personnalisé.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Two-Column Presentation: Languages & Sports Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Column 1: Languages */}
          <div className="lg:col-span-6 bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700">
                <Languages className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-950">Langues de travail & Aisance multiculturelle</h3>
                <p className="text-xs text-zinc-500">Trilingue : capacité à négocier et échanger avec divers interlocuteurs</p>
              </div>
            </div>

            <div className="space-y-4">
              {languages.map((lang, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-bold text-zinc-950">{lang.name}</span>
                    <span className="text-emerald-700 font-extrabold font-mono text-xs">
                      Cadre européen : {lang.cefr}
                    </span>
                  </div>
                  <div className="w-full bg-zinc-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-emerald-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${lang.percentage}%` }}
                    />
                  </div>
                  <div className="text-[11px] text-zinc-500 flex items-center justify-between">
                    <span>{lang.level}</span>
                    <span className="text-zinc-600 font-semibold font-mono">Maîtrise professionnelle</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Sports Mindset */}
          <div className="lg:col-span-6 bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700">
                <Dumbbell className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-950">Mindset Sportif & Résilience Commerciale</h3>
                <p className="text-xs text-zinc-500">Des disciplines exigeantes qui forgent le mental sous pression</p>
              </div>
            </div>

            <div className="space-y-3.5">
              {sportsInterests.map((sport, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-emerald-200 transition-colors">
                  <div className="flex items-center justify-between text-xs sm:text-sm mb-1.5">
                    <span className="font-bold text-zinc-950">{sport.name}</span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                      {sport.attribute}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                    {sport.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 p-3.5 bg-emerald-50/60 rounded-xl border border-emerald-100 text-xs text-zinc-700 italic">
              « Sur le ring comme en prospection : préparation millimétrée, respect absolu du client et détermination sans faille. »
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
