import './styles.css'
import Hero from '../Hero/Hero'
import Carrousel from '../Carrousel/Carrousel'
import {Link as Anchor} from 'react-router-dom'

function Main() {
  return (
    <>

      <main className="d-flex align-items-center" >

        <Hero />

      </main>

      <div className="d-flex justify-content-center">
        <Anchor to="/cities" id="call-to-action" className="btn btn-danger mb-5">Click to view <br /> the cities</Anchor>

      </div>

      <h2 className='popular'>POPULAR MYTINERARIES</h2>
      
      <Carrousel />

    </>
  )
}

export default Main