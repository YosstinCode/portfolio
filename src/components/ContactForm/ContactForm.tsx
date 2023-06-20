import Button from '../Button/Button'
import TextGradientOrWhite from '../TextGradientOrWhite/TextGradient'

const ContactForm = () => {
  return (
    <form className='flex flex-col justify-center items-center gap-4 rounded-[30px] w-[50rem] h-[32.813rem] mx-auto'>
      <div className='flex flex-col justify-center items-center'>
        <TextGradientOrWhite text='Tu idea mi compromiso' />
        <TextGradientOrWhite text='Trabajemos juntos' isGradient />
      </div>
      <div className='flex flex-col gap-8 items-center'>

        <input className='w-[32.75rem] h-10 py-2 px-4 rounded-[20px] bg-transparent' type='text' name='subject' id='subject' placeholder='Escribe tu asunto...' />
        <textarea className='w-[32.75rem] h-[12.5rem] py-2 px-4 rounded-[20px] bg-transparent resize-none' name='menssage' id='message' cols={30} rows={10} placeholder='Escribe tu mensaje...' />
      </div>
      <Button text='Enviar' />
    </form>
  )
}

export default ContactForm
