import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/servicios/')({
  component: () => <div className='mt-28'>Hello /servicios/!</div>
})