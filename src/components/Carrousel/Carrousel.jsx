
//mport images from '../../db/data_cities.json'
//import Card from '../Card/Card'
import BtnNext from '../BtnNext/BtnNext'
import BtnPrev from '../BtnPrev/BtnPrev'
import Slider from '../Slider/Slider'
import './styles.css'
import { slider1, slider2, slider3 } from '../../db/data_cities_sliders.json'



function Carrousel() {

    return (
        <>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">

                    <div className="carousel-item active" data-bs-interval="3000">

                        <Slider nro_slider={slider1} />

                    </div>

                    <div className="carousel-item" data-bs-interval="3000">

                        <Slider nro_slider={slider2} />

                    </div>

                    <div className="carousel-item" data-bs-interval="3000">

                        <Slider nro_slider={slider3} />

                    </div>

                </div>

                <BtnPrev />

                <BtnNext />


            </div>

        </>
    )
}

export default Carrousel