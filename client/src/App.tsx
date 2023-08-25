import './Global.css'
import { Body } from './components/Body'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

export const App = () => {
  return (
    <div className="screem">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}
