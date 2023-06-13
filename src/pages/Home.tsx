import Hero from '../components/Hero/Hero'
import RecentProjectSection from '../components/RecentProjectSection/RecentProjectSection'
import me from '../assets/images/me.png'

const Home = () => {
  return (
    <>
      <Hero />
      <RecentProjectSection />
      <img className='absolute right-0 bottom-0' src={me} width={550} height={600} />
    </>
  )
}

export default Home
