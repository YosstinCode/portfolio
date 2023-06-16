const ContactForm = () => {
  return (
    <form>
      <input type='text' name='subject' id='subject' />
      <textarea name='menssage' id='message' cols={30} rows={10} />
    </form>
  )
}

export default ContactForm
