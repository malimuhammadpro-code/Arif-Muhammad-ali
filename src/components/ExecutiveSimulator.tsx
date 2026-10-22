import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, CheckCircle2, ArrowRight, Target, Cpu } from 'lucide-react';

export const ExecutiveSimulator: React.FC = () => {
  const [quoteCount, setQuoteCount] = useState<number>(45);
  const [averageBasket, setAverageBasket] = useState<number>(280);
  const conversionRate = 0.65; // Arif's proven 65% transformation rate from Garage Khan

  const transformedQuotes = Math.round(quoteCount * conversionRate);
  const monthlyRevenue = transformedQuotes * averageBasket;
  const yearlyRevenue = monthlyRevenue * 12;

  return (
    <section id="simulateur" className="py-16 sm:py-24 bg-[#fafafa] border-b border-zinc-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 shadow-xs text-emerald-900 text-xs font-bold mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            <span className="uppercase tracking-wider text-[11px] font-extrabold text-emerald-800">
              Simulateur d'Impact Commercial & Chiffre d'Affaires
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-950 tracking-tight text-balance">
            Simulez la valeur commerciale apportée par Arif
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
            En vente, la valeur se mesure en chiffres concrets. Ajustez les curseurs ci-dessous pour projeter en direct le chiffre d'affaires potentiel généré avec le taux de conversion validé d'Arif (<strong className="text-zinc-950 font-bold">65 %</strong>).
          </p>
        </div>

        {/* Dashboard Card */}
        <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Controls (Left 6 cols) */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* Slider 1: Devis par mois */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-zinc-900 flex items-center gap-2">
                    <Target className="w-4 h-4 text-emerald-600" />
                    <span>Opportunités ou devis traités / mois :</span>
                  </label>
                  <span className="text-lg font-extrabold text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-xl border border-emerald-200 font-mono shadow-2xs">
                    {quoteCount} devis
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="120"
                  step="5"
                  value={quoteCount}
                  onChange={(e) => setQuoteCount(Number(e.target.value))}
                  className="w-full h-2.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] text-zinc-500 font-semibold">
                  <span>10 (Cycle long B2B)</span>
                  <span>45 (Rythme standard)</span>
                  <span>120 (Flux continu)</span>
                </div>
              </div>

              {/* Slider 2: Panier moyen */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-zinc-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-emerald-600" />
                    <span>Panier moyen par transaction estimé :</span>
                  </label>
                  <span className="text-lg font-extrabold text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-xl border border-emerald-200 font-mono shadow-2xs">
                    {averageBasket} € HT
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="1500"
                  step="20"
                  value={averageBasket}
                  onChange={(e) => setAverageBasket(Number(e.target.value))}
                  className="w-full h-2.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] text-zinc-500 font-semibold">
                  <span>100 € (Pièces courantes)</span>
                  <span>280 € (Moyenne Garage Khan)</span>
                  <span>1 500 €+ (Gros comptes B2B)</span>
                </div>
              </div>

              {/* Verified baseline card */}
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 text-xs text-zinc-700 space-y-1.5 shadow-xs">
                <div className="font-extrabold text-zinc-950 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Basé sur des métriques réelles vérifiables</span>
                </div>
                <p className="leading-relaxed">
                  Taux validé lors de l'expérience chez Garage Khan. Arif combine qualification consultative et relances rigoureuses pour transformer les prospects indécis en clients fidèles.
                </p>
              </div>

            </div>

            {/* Mission Control HUD (Right 6 cols) */}
            <div className="lg:col-span-6 bg-zinc-950 text-white rounded-3xl p-7 sm:p-9 space-y-6 shadow-xl relative overflow-hidden border border-zinc-800">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 relative">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-emerald-400" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-white font-extrabold block">
                      Projection Commerciale
                    </span>
                    <span className="text-[11px] text-zinc-400 font-mono">
                      ALGORITHME CONVERSION VENTE
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold shadow-xs">
                  Performance Validée
                </span>
              </div>

              {/* Data tiles */}
              <div className="grid grid-cols-2 gap-4 relative">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <span className="text-xs text-zinc-400 block mb-1">Deals closés / mois</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight tabular-nums block">
                    {transformedQuotes} <span className="text-sm font-normal text-emerald-400">ventes</span>
                  </span>
                  <span className="text-[11px] text-emerald-400 font-semibold block mt-1">65% de conversion</span>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <span className="text-xs text-zinc-400 block mb-1">CA mensuel estimé</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight tabular-nums block">
                    {monthlyRevenue.toLocaleString('fr-FR')} € <span className="text-sm font-normal text-zinc-400">HT</span>
                  </span>
                  <span className="text-[11px] text-zinc-400 font-mono block mt-1">par mois</span>
                </div>
              </div>

              {/* Annual projection banner */}
              <div className="bg-white/10 border border-white/15 rounded-2xl p-4 flex items-center justify-between relative shadow-inner">
                <div>
                  <span className="text-xs text-zinc-300 font-medium block">Production annuelle cumulée :</span>
                  <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight tabular-nums block">
                    {yearlyRevenue.toLocaleString('fr-FR')} € HT / an
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-emerald-400 block font-mono">Impact portefeuille</span>
                  <span className="text-xs font-bold text-emerald-400">Rentabilité rapide</span>
                </div>
              </div>

              {/* Action button */}
              <div className="pt-2 relative">
                <a
                  href="#contact"
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/30 transition-all group cursor-pointer"
                >
                  <span>Prendre contact avec Arif</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
