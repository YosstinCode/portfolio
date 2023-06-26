import TextGradientOrWhite from '../TextGradientOrWhite/TextGradientOrWhite'

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (

    <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-8 lg:gap-4 rounded-[30px] w-[21.438rem] lg:w-[50rem] h-[35rem] lg:h-[33rem] shadow-form mx-auto'>
      <div className='flex flex-col justify-center items-center'>
        <TextGradientOrWhite text='Tu idea, mi compromiso.' size='lg' />
        <TextGradientOrWhite text='¡Trabajemos juntos!' isGradient size='lg' />
      </div>
      <div className='flex flex-col gap-4 items-center text-white'>
        <div className='flex flex-col gap-1'>
          <label htmlFor='subject'>Asunto.</label>
          <input className='w-[16.875rem] lg:w-[32.75rem] h-10 py-2 px-4 rounded-[20px] bg-transparent shadow-innerInputs outline-none placeholder:text-placeholder' type='text' name='subject' id='subject' placeholder='Quiero trabajar contigo...' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='message'>Mensaje.</label>
          <textarea className='w-[16.875rem] lg:w-[32.75rem] h-[12.5rem] py-2 px-4 rounded-[20px] bg-transparent resize-none shadow-innerInputs outline-none placeholder:text-placeholder' name='menssage' id='message' cols={30} rows={10} placeholder='Tengo un nuevo proyecto entre manos y me gustaria tenerte en mi equipo...' />
        </div>
      </div>
      <button className='flex justify-center items-center font-semibold text-sm w-[117px] h-[44px] rounded-[10px] text-center text-white bg-azulito hover:bg-azulitoHover'> Enviar </button>
    </form>

  )
}

export default ContactForm
