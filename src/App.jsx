import CountdownTimer from './components/CountdownTimer'
import EventDetails from './components/EventDetails'
import FallingPetals from './components/FallingPetals'
import HeroSection from './components/HeroSection'
import LocationMap from './components/LocationMap'
import MusicPlayer from './components/MusicPlayer'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f5f8ed] text-[#27472a]">
      <FallingPetals />
      <main className="relative z-10">
        <HeroSection />
        <EventDetails />
        <CountdownTimer />
        <LocationMap />
      </main>
      <MusicPlayer />
    </div>
  )
}

export default App
