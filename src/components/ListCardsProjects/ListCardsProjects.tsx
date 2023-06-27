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
  return projects.map(({ id, github, figma, doc, deploy }) => <CardProject key={id} github={github} figma={figma} doc={doc} deploy={deploy} />)
}

export default ListCardsProjects
