import Card from '../Card/Card'
import images from '../../db/data_cities.json'
import {slider1, slider2, slider3} from '../../db/data_cities_sliders.json'


function Slider( {imagen1, imagen2, imagen3, imagen4} ) {

    console.log(slider1, slider2, slider3);
    return (
        <>

            <div className="row">

                <div className="col">

                    <Card imagen={images[imagen1].imagen} ciudad={images[imagen1].ciudad} pais={images[imagen1].pais} />

                    <Card imagen={images[imagen2].imagen} ciudad={images[imagen2].ciudad} pais={images[imagen2].pais} />

                </div>

                <div className="col">

                    <Card imagen={images[imagen3].imagen} ciudad={images[imagen3].ciudad} pais={images[imagen3].pais} />

                    <Card imagen={images[imagen4].imagen} ciudad={images[imagen4].ciudad} pais={images[imagen4].pais} />

                </div>

            </div>

        </>
    )
}

export default Slider