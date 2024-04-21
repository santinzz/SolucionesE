import { createLazyFileRoute } from '@tanstack/react-router'
export const Route = createLazyFileRoute('/nosotros' as never)({
  component: About,
})
function About() {
  return (
    <main className='mt-28'>
      hola
    </main>
  )
}