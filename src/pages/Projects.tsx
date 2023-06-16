import Circles from '../components/Circles/Circles'
import ListCardsProjects from '../components/ListCardsProjects/ListCardsProjects'
import ButtonsCvContact from '../components/PairButtonCvContact/ButtonsCvContact'
import TextGradientOrWhite from '../components/TextGradientOrWhite/TextGradient'
import { projects } from '../db/projects'

const Projects = () => {
  return (
    <>
      <main className='flex flex-col justify-center items-center gap-y-12 pt-6 text-center'>
        <Circles position='top-12 right-0' rotate />
        <TextGradientOrWhite text='Proyectos' isGradient />
        <ListCardsProjects projects={projects} cols />
        <ButtonsCvContact />
        <Circles position='bottom-0 left-0' />
      </main>
    </>
  )
}

export default Projects
