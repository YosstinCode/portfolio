import figma from '../../assets/images/figma.png'
import doc from '../../assets/images/doc.png'
import deploy from '../../assets/images/deploy.png'
import github from '../../assets/images/github.png'
import image from '../../assets/images/image.jpg'

const CardProject = () => {
  return (
    <>
      <div className='group w-56 h-[10.5rem] bg-gray-600 rounded-2xl relative'>
        <img className=' h-full rounded-2xl' src={image} alt='image' />
        <div className='pointer-events-none cursor-default absolute flex opacity-0 ease-out duration-500 left-2/4 top-0 justify-center items-center h-full w-full gap-4 bg-black rounded-2xl group-hover:left-0 group-hover:top-0 group-hover:opacity-90'>
          <img src={github} alt='github icon' className=' pointer-events-auto cursor-pointer' />
          <img src={figma} alt='figma icon' className=' pointer-events-auto cursor-pointer' />
          <img src={doc} alt='doc icon' className=' pointer-events-auto cursor-pointer' />
          <img src={deploy} alt='deploy icon' className=' pointer-events-auto cursor-pointer' />
        </div>
      </div>

    </>
  )
}

export default CardProject
