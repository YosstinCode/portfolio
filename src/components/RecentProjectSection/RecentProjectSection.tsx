import ListCardsProjects from '../ListCardsProjects/ListCardsProjects'

const RecentProjectSection = () => {
  return (
    <div className='flex flex-col gap-6 font-medium text-white pt-6'>
      <h2 className=' text-2xl'>Recent project</h2>
      <ListCardsProjects />
    </div>
  )
}

export default RecentProjectSection
