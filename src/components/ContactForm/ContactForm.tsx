import TextGradientOrWhite from '../TextGradientOrWhite/TextGradient'

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-4 rounded-[30px] w-[50rem] h-[32.813rem] mx-auto'>
      <div className='flex flex-col justify-center items-center'>
        <TextGradientOrWhite text='Tu idea mi compromiso' />
        <TextGradientOrWhite text='Trabajemos juntos' isGradient />
      </div>
      <div className='flex flex-col gap-8 items-center text-white'>
        <input className='w-[32.75rem] h-10 py-2 px-4 rounded-[20px] bg-transparent shadow-innerInputs outline-none' type='text' name='subject' id='subject' placeholder='Escribe tu asunto...' />
        <textarea className='w-[32.75rem] h-[12.5rem] py-2 px-4 rounded-[20px] bg-transparent resize-none shadow-innerInputs outline-none' name='menssage' id='message' cols={30} rows={10} placeholder='Escribe tu mensaje...' />
      </div>
      <button className='flex justify-center items-center font-semibold text-sm w-[117px] h-[44px] rounded-[10px] text-center text-white bg-azulito hover:bg-azulitoHover'> Enviar </button>
    </form>
  )
}

export default ContactForm
