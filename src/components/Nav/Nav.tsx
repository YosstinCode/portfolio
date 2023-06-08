import { Outlet, Link } from 'react-router-dom'

const pages = {
  Inicio: '/',
  Proyectos: '/proyectos',
  Contacto: '/contacto'
}

const Nav = () => {
  return (
    <>
      <nav className='font-medium text-white'>

        <ul className='flex justify-center h-12 w-[70.5rem] rounded-b-[1.875rem] gap-x-9 bg-nav shadow-nav mx-auto'>
          {Object.entries(pages).map((page) => <li key={page[0]} className='flex items-center'><Link to={page[1]} className='border-b-2 border-transparent hover:border-azulito'>{page[0]}</Link></li>)}
        </ul>

      </nav>

      <Outlet />
    </>
  )
}

export default Nav
