import React, { useState } from 'react';
import { Ear, Target, FileSpreadsheet, CheckCircle2, Bot, ArrowRight, MessageSquareQuote, Sparkles } from 'lucide-react';
import { workMethod, personalInfo } from '../data/portfolioData';

export const SalesMethodology: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeObjection, setActiveObjection] = useState(0);

  const icons = [
    <Ear className="w-5 h-5" />,
    <Target className="w-5 h-5" />,
    <FileSpreadsheet className="w-5 h-5" />,
    <CheckCircle2 className="w-5 h-5" />
  ];

  const practicalCases = [
    {
      scenario: "Découverte des besoins d'un client professionnel ou particulier",
      keyQuestion: "« Quels sont vos impératifs de délais et l'historique de la panne ou du besoin ? »",
      aiAssistance: "Synthèse rapide des historiques de commandes via le CRM pour identifier les récurrences.",
      outcome: "Compréhension intégrale du problème sans forcer une pièce inadaptée."
    },
    {
      scenario: "Qualification du panier et du pouvoir de décision",
      keyQuestion: "« Qui valide le règlement et quel est le niveau d'urgence pour la remise en circulation ? »",
      aiAssistance: "Évaluation du profil client et vérification immédiate des compatibilités de références.",
      outcome: "Zéro temps perdu sur des devis fantômes : 65% de taux de conversion garanti."
    },
    {
      scenario: "Chiffrage et présentation de l'offre (Panier moyen 280 € HT)",
      keyQuestion: "« Voici la proposition détaillée avec le choix entre pièce d'origine garantie ou alternative certifiée. »",
      aiAssistance: "Chiffrage assisté par tableur et génération d'un devis limpide et transparent.",
      outcome: "Valorisation de la qualité et de la garantie plutôt que du simple compromis sur les marges."
    },
    {
      scenario: "Accompagnement, relance courtoise et livraison",
      keyQuestion: "« La commande fournisseur est réceptionnée et contrôlée. Votre livraison est prête. »",
      aiAssistance: "Rappels automatiques de relances planifiées sur HubSpot pour ne perdre aucun contact chaud.",
      outcome: "Fidélisation durable et bouche-à-oreille positif pour la concession/l'entreprise."
    }
  ];

  const objectionHandling = [
    {
      objection: "« C'est plus cher que ce que j'ai vu sur Internet. »",
      context: "Objection Prix classique",
      response: "« Je comprends votre point de comparaison. Notre proposition à 280 € HT inclut la garantie équipementier certifiée, le contrôle de compatibilité immédiat et la disponibilité sous 24h. Si vous commandez une mauvaise référence en ligne, votre véhicule reste bloqué 1 semaine. Quelle est la valeur de votre tranquillité ? »",
      impact: "Recentrage sur le coût global d'immobilisation vs le simple prix facial."
    },
    {
      objection: "« Envoyez-moi juste un devis par mail, je vais réfléchir. »",
      context: "Objection de temporisation",
      response: "« Absolument, je vous l'envoie dans les 10 minutes. Mais pour vous éviter des allers-retours inutiles : sur quels critères précis allez-vous baser votre choix final ? Validons maintenant si un point technique mérite d'être ajusté. »",
      impact: "Élimine 80% des devis fantômes et qualifie le niveau d'intérêt réel."
    },
    {
      objection: "« Est-ce que vous pouvez me garantir la livraison demain matin ? »",
      context: "Objection Délais & Logistique",
      response: "« Fort de 14 mois passés en logistique chez Akar Ulker, je ne promets jamais ce qui ne peut être tenu. Pour demain 10h, notre stock est validé. Si un aléa survient, vous êtes alerté avant 8h. Vous pouvez compter sur cet engagement. »",
      impact: "Crédibilité maximale grâce au vécu terrain : zéro promesse non tenue."
    }
  ];

  return (
    <section id="methode" className="py-16 sm:py-24 bg-[#fafafa] border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-800 uppercase mb-2">
            <span>02</span>
            <span aria-hidden="true" className="text-zinc-300">·</span>
            <span>MÉTHODOLOGIE COMMERCIALE & RIGUEUR</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-950 tracking-tight text-balance">
            Ma méthode de travail en 4 étapes
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
            « {personalInfo.vision} »
          </p>
        </div>

        {/* 4 Steps Interactive Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {workMethod.map((item, index) => {
            const isSelected = activeStep === index;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(index)}
                className={`text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-white border-emerald-600 shadow-md shadow-emerald-600/10 ring-2 ring-emerald-600/10'
                    : 'bg-white/80 border-zinc-200 hover:bg-white hover:border-zinc-300 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                    isSelected ? 'bg-emerald-600 text-white' : 'bg-zinc-100 text-zinc-600'
                  }`}>
                    Étape {item.step}
                  </span>
                  <div className={isSelected ? 'text-emerald-600' : 'text-zinc-400'}>
                    {icons[index]}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-zinc-950 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed">
                  {item.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Detailed Presentation Slide Card */}
        <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Step details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                <span>PHASE {workMethod[activeStep].step} DU CYCLE COMMERCIAL</span>
                <span aria-hidden="true" className="text-zinc-300">·</span>
                <span>{workMethod[activeStep].title.toUpperCase()}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                {workMethod[activeStep].tagline}
              </h3>

              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                {workMethod[activeStep].description}
              </p>

              <div className="pt-4 border-t border-zinc-100 space-y-3.5">
                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 shrink-0 mt-0.5 border border-emerald-100">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-zinc-950 block">Application terrain concrète :</span>
                    <span className="text-zinc-600">{workMethod[activeStep].concreteAction}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <div className="p-1.5 rounded-lg bg-zinc-100 text-zinc-700 shrink-0 mt-0.5 border border-zinc-200">
                    <Bot className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <span className="font-bold text-zinc-950 block">Levier IA & Outils (HubSpot / Claude / ChatGPT) :</span>
                    <span className="text-zinc-600">{practicalCases[activeStep].aiAssistance}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case in practice preview */}
            <div className="lg:col-span-5 bg-emerald-50/50 rounded-2xl p-6 border border-emerald-200/80 space-y-4">
              <div className="flex items-center justify-between text-xs text-zinc-500 pb-2 border-b border-emerald-200/60">
                <span className="font-bold text-zinc-800">Cas réel en concession / entreprise</span>
                <span className="text-emerald-800 font-mono text-[11px] font-semibold">GARAGE KHAN · VENTE B2B/B2C</span>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-bold block mb-1.5">
                  Exemple d'échange client :
                </span>
                <p className="text-xs text-zinc-900 font-medium italic bg-white p-3.5 rounded-xl border border-emerald-200 shadow-xs leading-relaxed">
                  {practicalCases[activeStep].keyQuestion}
                </p>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-bold block mb-1">
                  Résultat mesuré :
                </span>
                <div className="flex items-center gap-2 text-xs text-emerald-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>{practicalCases[activeStep].outcome}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-zinc-500 border-t border-emerald-200/60">
                <span>Étape suivante de la méthode</span>
                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % 4)}
                  className="text-emerald-700 hover:text-emerald-900 flex items-center gap-1 font-bold cursor-pointer"
                >
                  <span>Passer à l'étape {((activeStep + 1) % 4) + 1}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Objection Handling Card */}
        <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-zinc-100">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
                <MessageSquareQuote className="w-4 h-4 text-emerald-600" />
                <span>Mise en situation commerciale réelle</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-950 tracking-tight">
                Comment Arif traite les objections clients au quotidien
              </h3>
            </div>
            <span className="text-xs text-zinc-600 bg-zinc-100 px-3 py-1.5 rounded-xl border border-zinc-200 font-medium">
              Cliquez sur une objection pour tester la réponse
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Objection Selection Buttons */}
            <div className="lg:col-span-5 space-y-3">
              {objectionHandling.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveObjection(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                    activeObjection === idx
                      ? 'bg-emerald-50/80 border-emerald-600 text-zinc-950 shadow-xs ring-1 ring-emerald-600'
                      : 'bg-zinc-50 border-zinc-200 hover:bg-white hover:border-zinc-300 text-zinc-700'
                  }`}
                >
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1">
                    {item.context}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold">
                    {item.objection}
                  </div>
                </button>
              ))}
            </div>

            {/* Answer & Negotiation Rationale */}
            <div className="lg:col-span-7 bg-zinc-950 text-white rounded-2xl p-6 sm:p-8 space-y-4 shadow-md">
              <div className="flex items-center justify-between text-xs border-b border-white/10 pb-3">
                <span className="font-bold text-emerald-400">Réponse commerciale d'Arif</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Négociation constructive
                </span>
              </div>

              <blockquote className="text-sm sm:text-base leading-relaxed text-zinc-100 font-normal italic">
                {objectionHandling[activeObjection].response}
              </blockquote>

              <div className="pt-3 border-t border-white/10 text-xs text-zinc-300 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white font-semibold">Effet recherché :</strong> {objectionHandling[activeObjection].impact}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
