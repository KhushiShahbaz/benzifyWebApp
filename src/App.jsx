import './index.css'
import { RoutersProvider } from './router/index.jsx'
import './globals.css'
import Navbar from './Components/Layout/navbar.jsx'
import Footer from './Components/Layout/footer.jsx'

function App() {
  return (
    <>
      <div className="relative h-full w-full bg-gradient-to-r from-purple-900 to-black to-blue-900">
        <Navbar />
        <div className="pt-20">
          <RoutersProvider />
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
