import TextGradientOrWhite from '../TextGradientOrWhite/TextGradientOrWhite'
import js from './../../assets/images/js.png'
import react from './../../assets/react.svg'
import ts from './../../assets/images/ts.png'
import python from './../../assets/images/python.png'
import java from './../../assets/images/java.png'
import django from './../../assets/images/django.png'
import sass from './../../assets/images/sass.png'
import springBoot from './../../assets/images/spring-boot.png'
import angular from './../../assets/images/angular.png'

const TecnologiesSection = () => {
  return (
    <div className='text-center lg:hidden flex flex-col gap-8'>
      <TextGradientOrWhite text='Tecnologias que uso' size='sm' />
      <div className='flex gap-2 justify-center'>
        <img src={angular} alt='angular' width={30} height={30} loading='lazy' />
        <img src={ts} alt='typescript' width={30} height={30} loading='lazy' />
        <img src={react} alt='react' width={30} height={30} loading='lazy' />
        <img src={js} alt='javascript' width={30} height={30} loading='lazy' />
        <img src={sass} alt='sass' width={30} height={30} loading='lazy' />
        <img src={java} alt='java' width={30} height={30} loading='lazy' />
        <img src={springBoot} alt='spring boot' width={30} height={30} loading='lazy' />
        <img src={python} alt='python' width={30} height={30} loading='lazy' />
        <img src={django} alt='django' width={30} height={30} loading='lazy' />
      </div>
    </div>
  )
}

export default TecnologiesSection
