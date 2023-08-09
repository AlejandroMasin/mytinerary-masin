// import images from '../../db/data_cities.json'
// import PropTypes from 'prop-types';


function Card( {imagen, ciudad, pais} ) {
    return (
        <>
            <div className="position-relative">
                <img src={imagen} className="img-fluid rounded m-1" alt="imagen-slide" />
                <div className="position-absolute top-0 start-0">
                    <p className="text-white bg-dark p-2">{ciudad}</p>
                </div>
                <div className="position-absolute bottom-0 end-0">
                    <p className="text-white bg-danger p-2">{pais}</p>
                </div>
            </div>
        </>
    )
}

export default Card