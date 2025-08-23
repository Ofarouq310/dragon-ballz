import Header from "./components/Header"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Features from "./sections/Features"
import Story from "./sections/Story"
import Glance from "./sections/Glance"


function App() {

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Features />
      <Story />
      <Glance />
    </main>
  )
}

export default App
