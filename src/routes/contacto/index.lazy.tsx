import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/contacto/')({
  component: () => <div className='mt-28'>Hello /contacto/!</div>
})