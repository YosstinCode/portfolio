import CardProject from '../CardProject/CardProject'

interface ListCardsProjectsProps {
  projects: Array< {
    id: number
    name: string
    image: string
    github: string
    deploy: string
    figma: string
    doc: string
  }>
}

const ListCardsProjects = ({ projects }: ListCardsProjectsProps) => {
  return (
    <div className='grid grid-cols-3 w-[45.188rem] items-center justify-center gap-4'>

      {
        projects.map(({ id, name, github, figma, doc, deploy }) => <CardProject key={id} name={name} github={github} figma={figma} doc={doc} deploy={deploy} />)
      }

    </div>
  )
}

export default ListCardsProjects
