import Button from '../Button/Button'
import ButtonShadow from '../ButtonShadow/ButtonShadow'
import cv from '../../assets/doc/CV-Yosstin.pdf'

const ButtonsCvContact = () => {
  return (
    <div className='flex gap-6'>
      <Button text='Contactame' path='/contacto' />
      <ButtonShadow text='Curriculum' path={cv} />
      {/* <ShadowButton /> */}
    </div>
  )
}

export default ButtonsCvContact
