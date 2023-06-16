import Circles from '../components/Circles/Circles'
import ContactForm from '../components/ContactForm/ContactForm'

const Contact = () => {
  return (
    <>
      <Circles position='top-12 right-0' rotate />
      <ContactForm />
      <Circles position='bottom-0 left-0' />
    </>
  )
}

export default Contact
