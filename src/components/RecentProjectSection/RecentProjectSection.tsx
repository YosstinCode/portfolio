import ListCardsProjects from '../ListCardsProjects/ListCardsProjects'
import { projects } from '../../db/projects'

const recentProjects = projects.slice(-3)

const RecentProjectSection = () => {
  return (
    <div className='flex flex-col gap-6 font-medium text-white pt-6'>
      <h2 className=' text-2xl'>Recent project</h2>
      <ListCardsProjects projects={recentProjects} />
    </div>
  )
}

export default RecentProjectSection
