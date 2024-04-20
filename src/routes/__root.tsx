import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <header className='p-2 flex gap-2 items-center justify-between font-["Poppins"] text-slate-800'>
        <nav className='flex gap-2 items-center'>
          <Link to='/'>
            <img src='./logo.png' className='w-28 h-auto' />
          </Link>
          <h1 className='text-xl font-bold hidden md:block'>Soluciones Empresariales</h1>
        </nav>
        <nav className='space-x-4 mr-4'>
          <Link
            to='/'
            className='[&.active]:text-black text-black/40 hover:text-black/80 duration-200 text-lg'
          >
            Home
          </Link>
          <Link
            to='/about'
            className='[&.active]:text-black text-black/40 duration-200 hover:text-black/80 text-lg'
          >
            About
          </Link>
        </nav>
      </header>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
