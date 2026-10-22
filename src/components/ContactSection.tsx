import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, UserCheck, Download, Calendar, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenCvModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCvModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: 'Opportunité Commerciale B2B / Vente',
    message: ''
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const copyValue = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const mailtoSubject = encodeURIComponent(`[Portfolio] ${formData.subject} - ${formData.company || formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Bonjour Arif,\n\nJe vous contacte suite à la consultation de votre portfolio.\n\nNom: ${formData.name}\nEntreprise: ${formData.company || 'N/A'}\nEmail: ${formData.email}\nTéléphone: ${formData.phone || 'N/A'}\n\nMessage:\n${formData.message}\n`
    );

    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setFormSubmitted(true);
  };

  const downloadVCard = () => {
    const vCardData = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'FN:Arif Muhammad Ali',
      'N:Ali;Arif;Muhammad;;',
      'TITLE:Commercial & Négociateur B2B/B2C - Euridis',
      `EMAIL;TYPE=INTERNET,WORK:${personalInfo.email}`,
      `TEL;TYPE=CELL:${personalInfo.phoneFormatted}`,
      'ADR;TYPE=WORK:;;Val-d’Oise;Île-de-France;;France',
      'NOTE:Bachelor Vente Euridis. 65% conversion devis, bilingue FR/Ourdou/Anglais C1.',
      'END:VCARD'
    ].join('\n');

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Arif_Muhammad_Ali.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-b from-[#fafafa] via-zinc-100 to-[#fafafa] border-b border-zinc-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header - Presentation Chapter 06 */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-zinc-500 uppercase mb-2">
            <span>06</span>
            <span aria-hidden="true" className="text-zinc-300">·</span>
            <span>PRISE DE CONTACT & ÉCHANGES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-950 tracking-tight text-balance">
            Discutons de vos enjeux commerciaux
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
            Disponible pour échanger sur vos projets commerciaux, opportunités de vente B2B ou partenariats en Île-de-France. 
            Je réponds sous 24 heures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct info, vCard and CV access */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact details card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-zinc-950 flex items-center justify-between">
                <span>Coordonnées directes</span>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Actif
                </span>
              </h3>

              <div className="space-y-4 text-sm">
                
                {/* Email item */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-400 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-zinc-950 text-white">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-zinc-500 font-medium block">Email professionnel</span>
                      <a href={`mailto:${personalInfo.email}`} className="font-bold text-zinc-950 hover:text-indigo-600 transition-colors">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyValue(personalInfo.email, 'email')}
                    className="p-2 text-zinc-400 hover:text-zinc-950 transition-colors cursor-pointer"
                    title="Copier l'email"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone item */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-400 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-zinc-950 text-white">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-zinc-500 font-medium block">Téléphone direct</span>
                      <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="font-bold text-zinc-950 hover:text-indigo-600 transition-colors">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyValue(personalInfo.phone, 'phone')}
                    className="p-2 text-zinc-400 hover:text-zinc-950 transition-colors cursor-pointer"
                    title="Copier le numéro"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location item */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200">
                  <div className="p-2.5 rounded-xl bg-zinc-950 text-white">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-500 font-medium block">Zone géographique</span>
                    <span className="font-bold text-zinc-950">{personalInfo.location}</span>
                    <span className="text-xs text-zinc-500 block">Mobilité Paris & Île-de-France (Permis B)</span>
                  </div>
                </div>

              </div>

              {/* Action buttons: vCard & CV Download */}
              <div className="pt-4 border-t border-zinc-100 space-y-3">
                <button
                  onClick={downloadVCard}
                  className="w-full py-3.5 px-4 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer border border-zinc-200"
                >
                  <UserCheck className="w-4 h-4 text-zinc-900" />
                  <span>Enregistrer dans mes contacts (vCard .vcf)</span>
                </button>

                <button
                  onClick={onOpenCvModal}
                  className="w-full py-3.5 px-4 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 text-white" />
                  <span>Consulter ou télécharger le CV (PDF)</span>
                </button>
              </div>

            </div>

            {/* Availability reminder */}
            <div className="p-5 rounded-2xl bg-white border border-zinc-200 text-xs text-zinc-600 shadow-xs">
              <div className="flex items-center gap-2 font-bold text-zinc-950 mb-1">
                <Calendar className="w-4 h-4 text-zinc-900" />
                <span>Disponibilité & Échanges</span>
              </div>
              <p className="text-zinc-600 leading-relaxed font-normal">
                Disponibilité rapide pour convenir d'un rendez-vous, d'un appel téléphonique ou d'une rencontre afin d'étudier vos opportunités commerciales.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-zinc-200 shadow-sm">
              <h3 className="text-xl font-bold text-zinc-950 mb-2 flex items-center gap-2">
                <span>Envoyer un message</span>
                <Sparkles className="w-4 h-4 text-indigo-500" />
              </h3>
              <p className="text-xs text-zinc-500 mb-6">
                Remplissez ce formulaire pour planifier un entretien ou poser vos questions.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-white text-emerald-600 border border-zinc-200 flex items-center justify-center mx-auto shadow-xs">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-zinc-950">Message préparé avec succès</h4>
                  <p className="text-xs text-zinc-600 max-w-md mx-auto leading-relaxed">
                    Votre logiciel de messagerie s'est ouvert avec les éléments pré-remplis. Vous pouvez aussi joindre Arif directement au <strong className="text-zinc-950">{personalInfo.phone}</strong>.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-4 py-2 text-xs font-bold text-zinc-700 hover:text-zinc-950 bg-white border border-zinc-300 rounded-lg cursor-pointer"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-800 mb-1.5">
                        Votre nom et prénom *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Sophie Martin"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-sm text-zinc-950 placeholder-zinc-400 focus:outline-none focus:border-zinc-950 focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zinc-800 mb-1.5">
                        Entreprise / Organisation
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: PME, Concession, Entreprise B2B"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-sm text-zinc-950 placeholder-zinc-400 focus:outline-none focus:border-zinc-950 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-800 mb-1.5">
                        Adresse email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="nom@entreprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-sm text-zinc-950 placeholder-zinc-400 focus:outline-none focus:border-zinc-950 focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zinc-800 mb-1.5">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        placeholder="06 XX XX XX XX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-sm text-zinc-950 placeholder-zinc-400 focus:outline-none focus:border-zinc-950 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-800 mb-1.5">
                      Objet de la demande
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-sm text-zinc-950 focus:outline-none focus:border-zinc-950 focus:bg-white transition-colors cursor-pointer font-medium"
                    >
                      <option value="Opportunité Commerciale B2B">Opportunité commerciale / Mission B2B</option>
                      <option value="Proposition de Poste / CDI">Proposition d'emploi / CDI</option>
                      <option value="Échange sur mon profil et mes résultats">Demande d'échange professionnel</option>
                      <option value="Autre demande">Autre opportunité</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-800 mb-1.5">
                      Votre message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Décrivez votre besoin ou proposition..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-sm text-zinc-950 placeholder-zinc-400 focus:outline-none focus:border-zinc-950 focus:bg-white transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmettre mon message à Arif Muhammad Ali</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
