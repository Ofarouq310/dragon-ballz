import Header from "./components/Header"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Features from "./sections/Features"

function App() {

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      {/* <section className="w-full min-h-screen" /> */}
      <Features />

    </main>
  )
}

export default App
