import ListCardsProjects from '../components/ListCardsProjects/ListCardsProjects'
import TextGradientOrWhite from '../components/TextGradientOrWhite/TextGradient'
import { projects } from '../db/projects'

const Projects = () => {
  return (
    <>
      <TextGradientOrWhite text='Proyectos' isGradient />
      <ListCardsProjects projects={projects} />
    </>
  )
}

export default Projects
