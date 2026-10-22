import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RecruiterReview } from './components/RecruiterReview';
import { SalesMethodology } from './components/SalesMethodology';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsAndTools } from './components/SkillsAndTools';
import { EducationSection } from './components/EducationSection';
import { ExecutiveSimulator } from './components/ExecutiveSimulator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PdfModal } from './components/PdfModal';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-950 flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-950 antialiased">
      {/* Top Bar Navigation */}
      <Navbar onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Main Presentation Content */}
      <main className="flex-1">
        <Hero onOpenCvModal={() => setCvModalOpen(true)} />
        <RecruiterReview />
        <SalesMethodology />
        <ExperienceSection />
        <SkillsAndTools />
        <EducationSection />
        <ExecutiveSimulator />
        <ContactSection onOpenCvModal={() => setCvModalOpen(true)} />
      </main>

      {/* Clean Footer */}
      <Footer onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Original PDF CV Modal & Viewer */}
      <PdfModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </div>
  );
}
