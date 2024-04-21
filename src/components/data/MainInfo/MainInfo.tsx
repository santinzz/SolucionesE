import { advantagesList, servicesData } from "@/data/landingData";

const MainInfo = () => {
	return (
		<div className='mt-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400 to-blue-700 text-white p-6'>
        <article className='flex flex-col items-center space-y-6'>
          <h3 className='lg:text-4xl md:text-3xl text-2xl text-center font-extrabold'>
            Algunos de los servicios que ofrecemos
          </h3>
          <div className='grid gap-6 max-w-7xl grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
            {servicesData.map(({ title, description, id }) => (
              <article
                key={id}
                className={`w-[300px] flex flex-col bg-white text-slate-800 p-4 rounded-md shadow-sm h-48 ${id % 2 === 0 && 'md:mt-8 lg:mt-12 mt-0'}`}
              >
                <header>
                  <h4 className='text-2xl font-bold'>{title}</h4>
                </header>
                <hr className='rounded-md h-[2px] bg-[#888]' />
                <p>{description}</p>
              </article>
            ))}
          </div>
        </article>
        <article className='flex flex-col items-center space-y-4 mt-10 max-w-6xl mx-auto'>
          <h3 className='lg:text-4xl font-extrabold'>¿Por qué elegirnos?</h3>
          <article className='rounded-lg bg-white flex flex-col md:flex-row text-slate-800'>
            <div className='flex-1'>
              <img
                className='rounded-lg rounded-r-none w-full'
                src='./service.png'
                alt='Imagen de representacion de servicio'
              />
            </div>
            <div className='flex-1 p-6 flex flex-col gap-y-5'>
              <p>
                Ofrecemos soluciones integrales y eficientes que simplifican la gestión de aspectos críticos para tu empresa.
              </p>
              <ul className='flex flex-col gap-2'>
                {advantagesList.map(({ name, Icon, id }) => (
                  <li key={id} className='flex gap-2 items-center'>
                    <Icon />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </article>
      </div>
	);
};

export default MainInfo;
