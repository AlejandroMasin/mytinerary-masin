// import images from '../../db/data_cities.json'
// import PropTypes from 'prop-types';

import './Styles.css'

function Card( {imagen, ciudad, pais} ) {
    return (
        <>
            <div className="position-relative">
                <img src={imagen} className="card__imagen rounded mt-3" alt="imagen-slide" />
                <div className="position-absolute top-0 m-2 start-0">
                    <p className="text-white bg-dark p-2 mt-3 rounded">{ciudad}</p>
                </div>
                <div className="position-absolute bottom-0 end-0 m-1">
                    <p className="text-white bg-danger p-2 rounded">{pais}</p>
                </div>
            </div>
        </>
    )
}

export default Card