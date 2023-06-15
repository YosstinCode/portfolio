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
  }>,
  cols?: boolean

}

const ListCardsProjects = ({ projects, cols }: ListCardsProjectsProps) => {
  const classNameCols = cols ? 'grid-cols-4 w-[60.75rem]' : 'grid-cols-3 w-[45.188rem]'

  return (
    <div className={'grid items-center justify-center gap-4 ' + classNameCols}>

      {
        projects.map(({ id, name, github, figma, doc, deploy }) => <CardProject key={id} name={name} github={github} figma={figma} doc={doc} deploy={deploy} />)
      }

    </div>
  )
}

export default ListCardsProjects
