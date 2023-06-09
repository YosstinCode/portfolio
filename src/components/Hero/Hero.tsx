import ButtonsCvContact from '../PairButtonCvContact/ButtonsCvContact'
import TextGradientOrWhite from '../TextGradientOrWhite/TextGradientOrWhite'

const Hero = () => {
  return (
    <div className='lg:w-[34.375rem] flex flex-col justify-center items-center lg:p-0 gap-y-6 pt-6'>
      <div className='text-center'>
        <h1>
          <TextGradientOrWhite text='Yosstin Castillo Ramírez' size='lg' />
        </h1>
        <h2>
          <TextGradientOrWhite text='Web Developer' isGradient size='lg' />
        </h2>
      </div>
      <p className='text-sm lg:text-normal text-grisecito lg:w-[34.375rem] text-center '>
        Especializado en tecnologías frontend. Me dedico a crear sitios y aplicaciones web que sean no solo funcionales sino también visualmente atractivas. Busco trabajar en proyectos emocionantes y desafiantes.
      </p>
      <ButtonsCvContact />

    </div>
  )
}

export default Hero
