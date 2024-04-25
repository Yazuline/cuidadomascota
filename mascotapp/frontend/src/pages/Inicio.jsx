import { About } from '../components/about-us/About'
import { Banner } from '../components/banner/Banner'
import { Info } from '../components/info/Info'

const Inicio = () => {
  return (
    <div>
      <Banner />
      <About />
      <Info />
      <button><a href="/perfil-dueño">perfil</a></button>
    </div>
  )
}

export default Inicio