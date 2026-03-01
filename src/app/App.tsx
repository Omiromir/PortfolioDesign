import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Speaking } from './components/Speaking';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const headerOffset = 80;

    const getScrollPosition = (element: HTMLElement) =>
      element.getBoundingClientRect().top + window.scrollY - headerOffset;

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const id = decodeURIComponent(href.slice(1));
      const section = document.getElementById(id);
      if (!section) return;

      event.preventDefault();
      window.history.pushState(null, '', `#${id}`);
      window.scrollTo({
        top: getScrollPosition(section),
        behavior: 'smooth',
      });
    };

    document.addEventListener('click', handleAnchorClick);

    if (window.location.hash) {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const section = document.getElementById(id);
      if (section) {
        requestAnimationFrame(() => {
          window.scrollTo({
            top: getScrollPosition(section),
            behavior: 'auto',
          });
        });
      }
    }

    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div id="top" className="min-h-screen bg-background text-foreground antialiased">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <Speaking />
      </main>
      <Footer />
    </div>
  );
}
