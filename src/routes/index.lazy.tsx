import { createLazyFileRoute } from '@tanstack/react-router';
import { LargeIcon, EasyIcon, RocketIcon, InfoIcon, RatingIcon } from '../components';
export const Route = createLazyFileRoute('/' as never)({
  component: Index,
});

const advantagesList = [
  {
    id: 1,
    name: 'Amplia Cobertura.',
    Icon: LargeIcon
  },
  {
    id: 2,
    name: 'Facilidad de uso.',
    Icon: EasyIcon
  },
  {
    id: 3,
    name: 'Ahorro de tiempo.',
    Icon: RocketIcon
  },
  {
    id: 4,
    name: 'Información en tiempo real.',
    Icon: InfoIcon
  },
  {
    id: 5,
    name: 'Experiencia y Confiabilidad.',
    Icon: RatingIcon
  }
]

const servicesData = [
  {
    id: 1,
    title: 'NominaTISS-SAT',
    description:
      'Reorganización estratégica para optimizar la gestión fiscal de Recursos Humanos en tu empresa.',
  },
  {
    id: 2,
    title: 'Apsi Vepa',
    description:
      'No tendrá que pagar multas, recargos ni cedulas de diferencia ¡Porque no las habrá! ¡Con APSI VEPA!',
  },
  {
    id: 3,
    title: 'Recursos Humanos',
    description:
      'Nuestro sistema agiliza procesos como solicitudes de empleo, entrevistas, exámenes médicos y bolsa de trabajo.',
  },
  {
    id: 4,
    title: 'APSI Check-In-Out',
    description:
      'Verifica la asistencia del personal de manera sencilla y eficiente. Simplifica el seguimiento del ingreso y salida del personal',
  },
];

function Index() {
  return (
    <main className='font-["Poppins"]'>
      <article className='mt-20 flex flex-col items-center max-w-6xl mx-auto text-slate-800'>
        <h1 className='lg:text-6xl sm:text-4xl md:text-5xl font-extrabold text-3xl text-center mb-4'>
          Transforma tu gestión de nómina
        </h1>
        <p className='text-center max-w-[70ch] mx-auto'>
          ¡Optimiza la gestión de tu nómina con NominaTISS-SAT! Con 30 años de
          experiencia, garantizamos una administración impecable ante el IMSS,
          INFONAVIT y SAT.
        </p>
        <p className='text-center max-w-[70ch] mx-auto mt-2'>
          Simplifica tus procesos y evita errores.¡Contactanos Ahora y descubre
          la diferencia!
        </p>
        <a
          href='#'
          className='bg-blue-500 hover:bg-blue-500/80 duration-200 text-white mt-2 px-4 py-2 rounded-md'
        >
          Contactar Ahora
        </a>
      </article>
      <div className='mt-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400 to-blue-700 text-white p-6'>
        <article className='flex flex-col items-center space-y-6'>
          <h3 className='lg:text-4xl font-extrabold'>
            Algunos de los servicios que ofrecemos
          </h3>
          <div className='grid gap-6 max-w-7xl grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]'>
            {servicesData.map(({ title, description, id }) => (
              <article
                key={id}
                className={`w-[300px] flex flex-col bg-white text-slate-800 p-4 rounded-md shadow-sm h-48 ${id % 2 === 0 && 'mt-12'}`}
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
          <article className='rounded-lg bg-white flex text-slate-800'>
            <div className='flex-1'>
              <img
                className='rounded-lg rounded-r-none'
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
    </main>
  );
}
