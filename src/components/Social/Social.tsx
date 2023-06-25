import github from '../../assets/images/Github2.png'
import linkedin from '../../assets/images/linkedin.png'
import twitter from '../../assets/images/twitter.png'
import instagram from '../../assets/images/instagram.png'

const Social = () => {
  return (
    <div className='flex mt-4 gap-2 justify-end items-end'>

      <img src={github} />
      <img src={linkedin} />
      <img src={twitter} />
      <img src={instagram} />

    </div>
  )
}

export default Social
