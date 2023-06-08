import Nav from '../components/Nav/Nav'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'

const App = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route path='/' element={<Home />} />
          <Route path='contacto' element={<Contact />} />
          <Route path='proyectos' element={<Projects />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
