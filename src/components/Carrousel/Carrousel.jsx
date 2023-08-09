
//mport images from '../../db/data_cities.json'
//import Card from '../Card/Card'
import BtnNext from '../BtnNext/BtnNext'
import BtnPrev from '../BtnPrev/BtnPrev'
import Slider from '../Slider/Slider'
import './styles.css'


function Carrousel() {

    return (
        <>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">

                    <div className="carousel-item active" data-bs-interval="3000">

                        <Slider imagen1={0} imagen2={1} imagen3={2} imagen4={3} />

                    </div>

                    <div className="carousel-item" data-bs-interval="3000">

                        <Slider imagen1={4} imagen2={5} imagen3={6} imagen4={7} />

                    </div>

                    <div className="carousel-item" data-bs-interval="3000">

                        <Slider imagen1={8} imagen2={9} imagen3={10} imagen4={11} />

                    </div>

                </div>

                <BtnPrev />

                <BtnNext />


            </div>

        </>
    )
}

export default Carrousel