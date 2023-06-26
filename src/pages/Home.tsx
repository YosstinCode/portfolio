import Hero from '../components/Hero/Hero'
import RecentProjectSection from '../components/RecentProjectSection/RecentProjectSection'
import me from '../assets/images/me.png'
import TecnologiesSection from '../components/TecnologiesSection/TecnologiesSection'

const Home = () => {
  return (
    <>
      <div className='flex flex-col gap-8 pt-8 lg:block lg:absolute lg:top-1/2 lg:-translate-y-1/2 animate-open-section'>
        <Hero />
        <RecentProjectSection />
        <TecnologiesSection />
      </div>
      <img className='absolute right-0 bottom-0 hidden lg:block' src={me} width={550} height={600} />
    </>
  )
}

export default Home
