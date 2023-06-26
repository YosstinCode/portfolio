import Circles from '../components/Circles/Circles'
import ListCardsProjects from '../components/ListCardsProjects/ListCardsProjects'
import ButtonsCvContact from '../components/PairButtonCvContact/ButtonsCvContact'
import TextGradientOrWhite from '../components/TextGradientOrWhite/TextGradientOrWhite'
import { projects } from '../db/projects'

const Projects = () => {
  return (
    <>
      <Circles position='top-12 right-0' rotate />

      <section className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  flex flex-col justify-center items-center gap-y-12 mt-6 lg:mt-0 text-center animate-open-section'>
        <TextGradientOrWhite text='Proyectos' isGradient size='lg2' />
        <div className=' h-[33.5rem] gap-4 flex flex-col overflow-scroll snap-mandatory snap-y relative lg:snap-none lg:grid lg:grid-cols-projects lg:overflow-hidden lg:h-auto lg:gap-6'>
          <ListCardsProjects projects={projects} />
        </div>
        <ButtonsCvContact />
      </section>

      <Circles position='bottom-0 left-0' />
    </>

  )
}

export default Projects
