import Circles from '../components/Circles/Circles'
import ContactForm from '../components/ContactForm/ContactForm'
import Social from '../components/Social/Social'

const Contact = () => {
  return (
    <>
      <Circles position='top-12 right-0' rotate />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] animate-open-section'>
        <ContactForm />
        <Social />
      </div>
      <Circles position='bottom-0 left-0' />
    </>
  )
}

export default Contact
