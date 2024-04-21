const Hero = () => {
  return (
    <article className='mt-28 flex flex-col items-center max-w-6xl mx-auto text-slate-800'>
      <h2 className='lg:text-6xl sm:text-4xl md:text-5xl font-extrabold text-3xl text-center mb-4'>
        Transforma tu gestión de nómina
      </h2>
      <p className='text-center max-w-[70ch] mx-auto'>
        ¡Optimiza la gestión de tu nómina con NominaTISS-SAT! Con 30 años de
        experiencia, garantizamos una administración impecable ante el IMSS,
        INFONAVIT y SAT.
      </p>
      <p className='text-center max-w-[70ch] mx-auto mt-2'>
        Simplifica tus procesos y evita errores.¡Contactanos Ahora y descubre la
        diferencia!
      </p>
      <a
        href='#'
        className='bg-blue-500 hover:bg-blue-500/80 duration-200 text-white mt-2 px-4 py-2 rounded-md'
      >
        Contactar Ahora
      </a>
    </article>
  );
};

export default Hero;
