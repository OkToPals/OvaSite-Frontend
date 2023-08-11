import Image from 'next/image';
import Hero from '@/components/hero';
import Content from '@/components/content';
// import Cta from '@/components/cta';

export default function Home() {
  const mainStyles = {
    background: '(beige, #CAC0D5)',
    minHeight: '50vh', // Set a minimum height to fill the viewport
    padding: '1rem', // Add padding to the main content using a responsive unit
  };

  return (
    <main style={mainStyles}>
      <Hero />
      <Content />
    </main>
  );
}
