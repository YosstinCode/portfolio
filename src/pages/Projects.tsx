import ListCardsProjects from '../components/ListCardsProjects/ListCardsProjects'
import ButtonsCvContact from '../components/PairButtonCvContact/ButtonsCvContact'
import TextGradientOrWhite from '../components/TextGradientOrWhite/TextGradient'
import { projects } from '../db/projects'

const Projects = () => {
  return (
    <>
      <main className='flex flex-col justify-center items-center gap-y-12 pt-6 text-center'>
        <TextGradientOrWhite text='Proyectos' isGradient />
        <ListCardsProjects projects={projects} cols />
        <ButtonsCvContact />
      </main>
    </>
  )
}

export default Projects
