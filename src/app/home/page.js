import Image from 'next/image';
import Hero from '@/components/hero';
import Content from '@/components/content';
import Uses from '@/components/uses';
import Steps from '@/components/steps';

export default function Home() {
  const mainStyles = {
    background: 'Beige-[#DDD0C8]',
    minHeight: '50vh', // Set a minimum height to fill the viewport
    padding: '1rem', // Add padding to the main content using a responsive unit
  };

  return (
    <main style={mainStyles}>
      <Hero />
      <Content />
      <Steps/>
      <Uses />
    </main>
  );
}
