import { Link } from 'react-router-dom'
import menu from './../../assets/images/Menu.png'
import close from './../../assets/images/close.png'
import { useState } from 'react'
import './nav.css'

const pages = {
  Inicio: '/',
  Proyectos: '/proyectos',
  Contacto: '/contacto'
}

const Nav = () => {
  const [isOpen, setIsOpen] = useState(true)

  const handleOpen = () => {
    setIsOpen(!isOpen)

    const nav = document.querySelector('#nav')

    nav?.classList.toggle('circle-open')
    nav?.classList.toggle('circle-close')
  }

  return (
    <nav className='font-medium text-white text-4xl text-center pt-4 lg:text-base lg:pt-0'>

      <div className='cursor-pointer mx-auto relative flex justify-center items-center w-14 h-14 rounded-full shadow-buttonNavMobile z-20 lg:hidden' onClick={handleOpen}>
        {
          isOpen ? <img className='' src={menu} alt='menu icon' /> : <img className='' src={close} alt='menu icon' />
        }
      </div>

      <ul id='nav' className='flex flex-col justify-center items-center gap-8 absolute top-0 h-screen w-screen bg-azulito z-10 circle-close lg:relative lg:flex-row  lg:h-12 lg:w-[70.5rem] lg:rounded-b-[1.875rem] lg:gap-x-9 lg:bg-nav lg:shadow-nav lg:animate-none'>
        {Object.entries(pages).map((page) => {
          const linkClass = 'flex justify-center items-center w-[12.125rem] h-[4.563rem] p-2 border-b-4 lg:w-auto lg:h-auto lg:p-0 lg:border-b-2 hover:border-white' + (location.pathname === page[1] ? ' border-white lg:border-azulito' : ' border-transparent')

          return <li key={page[0]}><Link to={page[1]} className={linkClass} onClick={handleOpen}>{page[0]}</Link></li>
        })}
      </ul>

    </nav>
  )
}

export default Nav
