import Button from '../Button/Button'
import ButtonsCvContact from '../PairButtonCvContact/ButtonsCvContact'
import TextGradientOrWhite from '../TextGradientOrWhite/TextGradient'

const Hero = () => {
  return (
    <div className=' w-[34.375rem] flex flex-col justify-center items-center gap-y-6 pt-6'>
      <div className='text-center'>
        <h1>
          <TextGradientOrWhite text='Yosstin Steven Castillo' />
        </h1>
        <h2>
          <TextGradientOrWhite text='Web Developer' isGradient />
        </h2>
      </div>
      <p className='text-normal text-grisecito w-[34.375rem] text-center '>
        Especializado en tecnologías frontend. Me dedico a crear sitios y aplicaciones web que sean no solo funcionales sino también visualmente atractivas. Busco trabajar en proyectos emocionantes y desafiantes.
      </p>
      <ButtonsCvContact />

    </div>
  )
}

export default Hero
