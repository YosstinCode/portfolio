import github from '../../assets/images/Github2.png'
import linkedin from '../../assets/images/linkedin.png'
import twitter from '../../assets/images/twitter.png'
import instagram from '../../assets/images/instagram.png'

const Social = () => {
  return (
    <div className='flex justify-center items-center mt-12 lg:mt-2 gap-4 lg:gap-2 lg:justify-end lg:items-end'>

      <a href='#'>
        <img src={github} width={50} height={50} className=' w-10 h-10' />
      </a>
      <a href='#'>
        <img src={linkedin} width={50} height={50} className=' w-10 h-10' />
      </a>
      <a href='#'>
        <img src={twitter} width={50} height={50} className=' w-10 h-10' />
      </a>
      <a href='#'>
        <img src={instagram} width={50} height={50} className=' w-10 h-10' />
      </a>

    </div>
  )
}

export default Social
