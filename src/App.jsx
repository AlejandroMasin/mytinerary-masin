import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import imagen from './assets/imagen_react.png'
function App() {

  return (
    <>

      <header>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">My Tinerary</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                <a className="nav-link" href="#">Cities</a>
                <a className="nav-item btn btn-primary" href="#">Login</a>
              </div>
            </div>
          </div>
        </nav>
        {/* corregir */}
      </header>

      <main className="d-flex align-items-center" >

        <div className="row">
          <div className="col-8 col-md-6">
            <h2>Find the perfect destination</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, numquam ratione placeat tempore harum, labore atque consequatur magni nam illum ut suscipit rem consectetur. Deserunt quae aliquam eos. Obcaecati, laborum?</p>

            <a className="btn btn-primary" href="">View More</a>
          </div>
          <div className="col-4 col-md-6"><img className="img-fluid" src={imagen} alt="" />
          </div>
        </div>

      </main>


      <footer>
        <p>Todos los derechos de autor &copy; 2023 | Mindhub</p>
      </footer>

    </>
  )
}

export default App
