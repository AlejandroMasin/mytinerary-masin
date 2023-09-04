import RandomUser from '../RandomUser/RandomUser'
import './styles.css'
import like from '/public/like.svg'
import money from '/public/icons8-money-48.png'
import en_construccion from '../../../public/construccion.jpg'

function Itinerary({ nombre, precio, duracion, likes, hashtags }) {

    // const cantidadRepeticiones = 3;

    const lineasRepetidas = [...Array(precio)].map((_, index) => (
        <img key={index} src={money} alt={`Precio_imagen_${index}`} />
    ));

    return (
        <>

            <div className="card_itinerary">

                <h3 className="itinerary-heading">Itinerary: {nombre}</h3>

                <div className="row">
                    <RandomUser />
                </div>

                <div className="row">
                    <div className="col-3"> Price
                        <div>
                            {lineasRepetidas}
                        </div>

                    </div>
                    <div className="col-3">
                        <span>Duration</span>
                        <span>{duracion}</span>
                    </div>
                    <div className="col-3">

                        <div className='m-3'> {likes} <img src={like} alt="Likes_imagen" /></div>

                    </div>
                    <div className="col-3">

                        <div>
                            {hashtags.map((hashtag, index) => (
                                <span key={index}>{hashtag}</span>
                            ))}
                        </div>

                    </div>


                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header"> See more...
                                <button id='textp_acordion' className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Tu texto aquí<div></div>
                                </button>

                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <img src={en_construccion} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Itinerary