import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { useState } from 'react';

const Root = () => {
  const [isMenuPressed, setIsMenuPressed] = useState<boolean>(false);

  const handleClick = () => {
    setIsMenuPressed(!isMenuPressed);
  };

  return (
    <>
      <header className='px-4 py-14 flex gap-2 items-center justify-between font-["Poppins"] w-full fixed top-0 h-20 bg-white mx-auto text-slate-800 shadow-sm'>
        <nav className='flex gap-2 items-center'>
          <Link to='/'>
            <img src='./logo.png' className='w-28 h-auto' alt='Logo de la empresa soluciones empresariales'/>
          </Link>
          <h1 className='text-xl font-bold hidden lg:block'>
            Soluciones Empresariales
          </h1>
        </nav>
        <nav
          className={`flex gap-8 sm:gap-4 flex-col md:flex-row md:static duration-200 pb-8 md:pb-0 bg-white mx-auto absolute top-28 right-0 transform mr-0 md:mr-4 md:w-auto w-screen ${isMenuPressed ? 'translate-x-0 items-center' : 'translate-x-[130%] md:translate-x-0'}`}
        >
          <Link
            to='/'
            className='[&.active]:text-slate-800 [&.active]:underline underline-offset-4 text-slate-800/70 hover:text-slate-800/80 duration-200 text-lg'
          >
            Inicio
          </Link>
          <Link
            to='/nosotros'
            className='[&.active]:text-slate-800 [&.active]:underline underline-offset-4 text-slate-800/70 duration-200 hover:text-slate-800/80 text-lg'
          >
            Nosotros
          </Link>
          <Link
            to='/servicios'
            className='[&.active]:text-slate-800 [&.active]:underline underline-offset-4 text-slate-800/70 duration-200 hover:text-slate-800/80 text-lg'
          >
            Servicios
          </Link>
          <Link
            to='/contacto'
            className='[&.active]:text-slate-800 [&.active]:underline underline-offset-4 text-slate-800/70 duration-200 hover:text-slate-800/80 text-lg'
          >
            Contacto
          </Link>
        </nav>
        <nav className='md:hidden'>
          <div className='grid gap-[0.65rem] w-10 mr-4' onClick={handleClick}>
            <div
              className={`h-1 rounded-full bg-slate-800 w-full duration-300 origin-left ${isMenuPressed ? 'rotate-45' : 'rotate-0'}`}
            ></div>
            <div
              className={`h-1 rounded-full bg-slate-800 w-full duration-300 origin-left ${isMenuPressed ? 'opacity-0' : 'opacity-100'}`}
            ></div>
            <div
              className={`h-1 rounded-full bg-slate-800 w-full duration-300 origin-left ${isMenuPressed ? '-rotate-45' : 'rotate-0'}`}
            ></div>
          </div>
        </nav>
      </header>
      <hr />
      <Outlet />
    </>
  );
};

export const Route = createRootRoute({
  component: Root,
});
