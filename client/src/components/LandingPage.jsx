// LandingPage.jsx
import React from 'react';
import Header from '../features/Header/Header';
import Hero from '../features/Hero/Hero';
import FeaturesGrid from '../features/FeaturesGrid/FeaturesGrid';
import RoadmapPreview from '../features/RoadmapPreview/RoadmapPreview';
import Testimonials from '../features/Testimonials/Testimonials';
import ContactForm from '../features/ContactForm/ContactForm';
import RoadmapModal from '../features/RoadmapModal/RoadmapModal';
import Footer from '../features/Footer/Footer';
import useLocalStorage from '../hooks/useLocalStorage';

export default function LandingPage() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [previewItems, setPreviewItems] = useLocalStorage('roadmap_preview', [
    { id: 't1', title: 'Day 1 — JavaScript fundamentals' },
    { id: 't2', title: 'Day 2 — DOM & Fetch' },
    { id: 't3', title: 'Day 3 — Build landing page' }
  ]);

  function handleGenerate(data) {
    // Very simple generation example: map known skills into tasks
    const tasks = data.knownSkills.slice(0, 6).map((s, i) => ({
      id: `g${Date.now()}${i}`,
      title: `Learn ${s} — ${Math.max(1, data.hoursPerDay)} hour(s)`
    }));
    setPreviewItems(tasks);
  }

  return (
    <>
      <Header onGenerate={() => setModalOpen(true)} />
      <Hero onGenerate={() => setModalOpen(true)} previewItems={previewItems} />
      <FeaturesGrid />
      <RoadmapPreview items={previewItems} />
      <Testimonials />
      <ContactForm />
      <Footer />
      <RoadmapModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onGenerate={handleGenerate} />
    </>
  );
}
