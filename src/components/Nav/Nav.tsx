import { Outlet, Link, useLocation } from 'react-router-dom'

const pages = {
  Inicio: '/',
  Proyectos: '/proyectos',
  Contacto: '/contacto'
}

const Nav = () => {
  const location = useLocation()
  console.log(location.pathname)

  return (
    <>
      <nav className='font-medium text-white'>

        <ul className='flex justify-center h-12 w-[70.5rem] rounded-b-[1.875rem] gap-x-9 bg-slate-800 shadow-nav mx-auto'>
          {Object.entries(pages).map((page) => {
            const linkClass = 'border-b-2 hover:border-white' + (location.pathname === page[1] ? ' border-azulito' : ' border-transparent')

            return <li key={page[0]} className='flex items-center'><Link to={page[1]} className={linkClass}>{page[0]}</Link></li>
          })}
        </ul>

      </nav>

      <Outlet />
    </>
  )
}

export default Nav
