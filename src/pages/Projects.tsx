import Circles from '../components/Circles/Circles'
import ListCardsProjects from '../components/ListCardsProjects/ListCardsProjects'
import ButtonsCvContact from '../components/PairButtonCvContact/ButtonsCvContact'
import TextGradientOrWhite from '../components/TextGradientOrWhite/TextGradient'
import { projects } from '../db/projects'

const Projects = () => {
  return (
    <>
      <Circles position='top-12 right-0' rotate />
      <section className='flex flex-col justify-center items-center gap-y-12 pt-6 text-center animate-open-section'>
        <TextGradientOrWhite text='Proyectos' isGradient />
        <ListCardsProjects projects={projects} cols />
        <ButtonsCvContact />
      </section>
      <Circles position='bottom-0 left-0' />
    </>

  )
}

export default Projects
