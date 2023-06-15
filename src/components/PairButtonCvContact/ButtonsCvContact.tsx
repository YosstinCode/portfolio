import Button from '../Button/Button'

const ButtonsCvContact = () => {
  return (
    <div className='flex gap-6'>
      <Button text='Contactame' path='/Contacto' />
      <Button text='Curriculum' isShadow path='/curriculum' />
      {/* <ShadowButton /> */}
    </div>
  )
}

export default ButtonsCvContact
