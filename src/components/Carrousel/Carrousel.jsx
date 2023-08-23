import BtnNext from '../BtnNext/BtnNext'
import BtnPrev from '../BtnPrev/BtnPrev'
import Slider from '../Slider/Slider'
import './styles.css'
import { slider1, slider2, slider3 } from '../../db/data_cities_sliders.json'

// import { useState, useEffect } from 'react';

function Carrousel() {

    // const [sliderData, setSliderData] = useState({});

    // useEffect(() => {

    //   fetch('./data_cities_sliders.json')
    //     .then((response) => response.json())
    //     .then((data) => {

    //       setSliderData(data);
    //     })
    //     .catch((error) => {
    //       console.error('Error al cargar datos JSON:', error);
    //     });
    // }, []);

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