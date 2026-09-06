import React from 'react';
import AnimatedCursor from 'react-animated-cursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import TechStack from './components/sections/TechStack';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

import portfolioData from './data/portfolioData';

export default function App() {
  const { profile, projects, certifications, experiences } = portfolioData;

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        color="6, 182, 212"
        outerAlpha={0.25}
        innerScale={0.8}
        outerScale={1.8}
        trailingSpeed={12}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.btn',
          '.cert-slip',
          '.cert-lightbox-close'
        ]}
      />
      <Navbar resumeUrl={profile?.resumeUrl} />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Experience experiences={experiences} />
        <TechStack profile={profile} />
        <Projects projects={projects} />
        <Certifications certs={certifications} />
        <Contact profile={profile} />
      </main>
      <Footer socials={profile?.socialLinks} />
      <ScrollToTop />
    </>
  );
}
