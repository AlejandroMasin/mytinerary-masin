import imagen from '../../../public/imagen_hero.jpg'
import {Link as Anchor} from 'react-router-dom'
import './styles.css'

function Hero() {
    return (
        <>
            <div className="row justify-content-center align-items-center">

                <div className="col-md-6 text-center">
                    <h2 id="title">Find the perfect destination</h2>
                    <p id="parrafo">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                    <div id="boton"className='text-center'>

                        <Anchor to="/cities" className="btn btn-primary d-flex justify-content-center">View More</Anchor>

                    </div>
                </div>

                <div id='imagen__hero' className="col-md-6 text-end">
                    <img className="img-fluid mt-3" src={imagen} alt="" />
                </div>


            </div>



        </>
    )
}

export default Hero