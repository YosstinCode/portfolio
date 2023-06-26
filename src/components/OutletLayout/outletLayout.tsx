import { Outlet, useLocation } from 'react-router-dom'
import Nav from '../Nav/Nav'

const OutletLayout = () => {
  const location = useLocation()
  console.log(location.pathname)

  return (
    <>
      <Nav />
      <div className='px-4'>
        <Outlet />
      </div>
    </>
  )
}

export default OutletLayout
