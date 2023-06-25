import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'
import OutletLayout from '../components/OutletLayout/outletLayout'

const App = () => {
  return (
    <div className='min-h-screen px-4 lg:px-[7.438rem] bg-background bg-no-repeat bg-cover'>
      <Routes>
        <Route path='/' element={<OutletLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='contacto' element={<Contact />} />
          <Route path='proyectos' element={<Projects />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
