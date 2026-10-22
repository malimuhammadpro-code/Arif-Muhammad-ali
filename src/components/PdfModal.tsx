import React, { useState } from 'react';
import { X, Download, FileText, ExternalLink } from 'lucide-react';
import { personalInfo, experiences, educations, skillCategories, languages, sportsInterests } from '../data/portfolioData';

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PdfModal: React.FC<PdfModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'pdf' | 'html'>('pdf');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/70 backdrop-blur-sm">
      <div
        className="relative w-full max-w-5xl h-[90vh] bg-white border border-zinc-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 bg-zinc-50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-zinc-950">
                CV & Document Original · Arif Muhammad Ali
              </h3>
              <p className="text-[11px] text-zinc-500 font-mono">
                Portfolio_word_afb72b6b.pdf
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            {/* View switcher */}
            <div className="hidden sm:flex items-center gap-1 p-1 bg-white rounded-lg border border-zinc-200 text-xs">
              <button
                onClick={() => setViewMode('pdf')}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  viewMode === 'pdf' ? 'bg-emerald-600 text-white font-bold' : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                Aperçu PDF
              </button>
              <button
                onClick={() => setViewMode('html')}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  viewMode === 'html' ? 'bg-emerald-600 text-white font-bold' : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                Version texte
              </button>
            </div>

            <a
              href={personalInfo.cvPdfUrl}
              download="CV_Arif_Muhammad_Ali.pdf"
              className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors shadow-xs"
              title="Télécharger le document PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Télécharger PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-zinc-500 hover:text-zinc-950 rounded-lg hover:bg-zinc-100 transition-colors cursor-pointer"
              aria-label="Fermer le modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-auto bg-zinc-100 p-2 sm:p-4">
          {viewMode === 'pdf' ? (
            <div className="w-full h-full rounded-2xl overflow-hidden bg-white border border-zinc-200 relative shadow-inner">
              <iframe
                src={`${personalInfo.cvPdfUrl}#toolbar=0`}
                title="Aperçu du Portfolio PDF"
                className="w-full h-full border-none"
              />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm border border-zinc-200 px-4 py-2 rounded-xl text-xs text-zinc-600 flex items-center gap-3 shadow-md">
                <span>Le PDF ne s'affiche pas correctement ?</span>
                <button
                  onClick={() => setViewMode('html')}
                  className="text-emerald-700 hover:underline font-bold cursor-pointer"
                >
                  Basculer sur la vue texte
                </button>
                <span>·</span>
                <a
                  href={personalInfo.cvPdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-950 hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Ouvrir dans un nouvel onglet</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ) : (
            /* Clean Print/HTML View matching the document verbatim */
            <div className="max-w-3xl mx-auto bg-white text-zinc-900 rounded-2xl p-8 sm:p-12 shadow-md print:p-0 my-4 text-sm leading-relaxed space-y-6 border border-zinc-200">
              <div className="border-b border-zinc-200 pb-6 flex flex-col sm:flex-row items-start justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-zinc-950 tracking-tight">
                    Portfolio : Arif Muhammad Ali
                  </h1>
                  <p className="text-zinc-700 font-semibold text-sm mt-1">
                    Étudiant en Bachelor Vente & Négociation commerciale, Euridis Business School
                  </p>
                  <p className="text-xs text-zinc-500 mt-2 font-mono">
                    {personalInfo.email} · {personalInfo.phone} · {personalInfo.location}
                  </p>
                </div>
                <img
                  src={personalInfo.avatarUrl}
                  alt="Photo profil Arif Muhammad Ali"
                  className="w-20 h-20 rounded-full border border-zinc-200 object-cover shadow-xs"
                />
              </div>

              <div>
                <h2 className="text-base font-bold text-zinc-950 mb-1">Présentation</h2>
                <p className="text-zinc-700 text-xs leading-relaxed">{personalInfo.bio}</p>
              </div>

              <div>
                <h2 className="text-base font-bold text-zinc-950 mb-1">Ma vision de la vente</h2>
                <p className="text-zinc-700 text-xs leading-relaxed">{personalInfo.vision}</p>
              </div>

              <div>
                <h2 className="text-base font-bold text-zinc-950 mb-2">Ma méthode de travail</h2>
                <ol className="list-decimal pl-5 space-y-1 text-xs text-zinc-700">
                  <li><strong>Écouter :</strong> comprendre la situation avant de parler d’offre.</li>
                  <li><strong>Qualifier :</strong> identifier le besoin réel et la personne qui décide.</li>
                  <li><strong>Proposer :</strong> présenter une réponse claire, chiffrée et adaptée.</li>
                  <li><strong>Suivre :</strong> relancer et accompagner jusqu’à la livraison.</li>
                </ol>
              </div>

              <div>
                <h2 className="text-base font-bold text-zinc-950 mb-2">Expériences professionnelles</h2>
                <div className="space-y-4">
                  {experiences.map((exp) => (
                    <div key={exp.id} className="text-xs text-zinc-700">
                      <div className="font-bold text-zinc-950">
                        {exp.role}, {exp.company} ({exp.period})
                      </div>
                      <ul className="list-disc pl-5 mt-1 space-y-0.5">
                        {exp.achievements.map((ach, i) => (
                          <li key={i}>{ach}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-base font-bold text-zinc-950 mb-2">Formation</h2>
                <ul className="list-disc pl-5 space-y-1 text-xs text-zinc-700">
                  {educations.map((edu) => (
                    <li key={edu.id}>
                      <strong>{edu.degree}</strong>, {edu.school} ({edu.period})
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-base font-bold text-zinc-950 mb-2">Compétences et outils</h2>
                <ul className="list-disc pl-5 space-y-1 text-xs text-zinc-700">
                  <li><strong>Compétences :</strong> prospection, négociation, closing, devis, facturation, conseil client, suivi de dossiers, achats de pièces.</li>
                  <li><strong>Outils :</strong> HubSpot (CRM), Pack Office, Canva, CapCut.</li>
                  <li><strong>IA :</strong> Claude et ChatGPT, utilisés comme assistants. Je vérifie toujours les informations produites.</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-zinc-200 text-xs">
                <div>
                  <h3 className="font-bold text-zinc-950">Langues</h3>
                  <p className="text-zinc-700">Français (C2), ourdou (C2), anglais (C1).</p>
                </div>
                <div>
                  <h3 className="font-bold text-zinc-950">Centres d’intérêt</h3>
                  <p className="text-zinc-700">Boxe et kickboxing, football, padel, badminton.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
