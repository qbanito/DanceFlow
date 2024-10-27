import { Hero } from '@/components/home/Hero';
import { Features } from '@/components/home/Features';
import { Testimonials } from '@/components/home/Testimonials';

export function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      <Testimonials />
    </div>
  );
}