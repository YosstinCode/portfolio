import figmaIcon from '../../assets/images/figma.png'
import docIcon from '../../assets/images/doc.png'
import deployIcon from '../../assets/images/deploy.png'
import githubIcon from '../../assets/images/github.png'
import image from '../../assets/images/image.jpg'

interface CardProjectProps {
  name: string
  github: string
  figma: string
  doc: string
  deploy: string
}

const CardProject = ({ name, github = '#', figma = '#', doc = '#', deploy = '#' }: CardProjectProps) => {
  return (
    <>
      <div className='group w-56 h-[10.5rem] bg-gray-600 rounded-2xl relative flex-grow flex-shrink-0 basis-auto snap-center lg:flex-grow-0'>
        <img className=' h-full rounded-2xl' src={image} alt='image' loading='lazy' />
        <div className='pointer-events-none w-full cursor-default absolute flex opacity-0 ease-out duration-500 left-2/4 top-0 justify-center items-center h-full gap-4 bg-black rounded-2xl group-hover:left-0 group-hover:top-0 group-hover:opacity-90'>
          <a href={deploy}>
            <img src={deployIcon} alt='deploy icon' className='pointer-events-auto' loading='lazy' />
          </a>
          <a href={github}>
            <img src={githubIcon} alt='github icon' className='pointer-events-auto' loading='lazy' />
          </a>
          <a href={figma}>
            <img src={figmaIcon} alt='figma icon' className='pointer-events-auto' loading='lazy' />
          </a>
          <a href={doc}>
            <img src={docIcon} alt='doc icon' className='pointer-events-auto' loading='lazy' />
          </a>
        </div>
      </div>

    </>
  )
}

export default CardProject
