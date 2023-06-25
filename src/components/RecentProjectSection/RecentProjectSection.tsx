import ListCardsProjects from '../ListCardsProjects/ListCardsProjects'
import { projects } from '../../db/projects'

const recentProjects = projects.slice(-3)

const RecentProjectSection = () => {
  return (
    <div className='flex flex-col gap-6 font-medium text-white pt-6'>
      <h2 className=' text-2xl text-center lg:text-left'>Proyectos recientes</h2>
      <div className=' mx-auto w-56 flex flex-nowrap overflow-scroll snap-mandatory snap-x relative gap-x-4 lg:m-0 lg:w-auto lg:overflow-hidden lg:snap-none lg:flex-wrap lg:static'>
        <ListCardsProjects projects={recentProjects} />
      </div>
    </div>
  )
}

export default RecentProjectSection
