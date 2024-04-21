import { createLazyFileRoute } from '@tanstack/react-router';
import { Hero, MainInfo } from '@/components/data';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <main className='font-["Poppins"]'>
      <Hero />
      <MainInfo />
    </main>
  );
}
