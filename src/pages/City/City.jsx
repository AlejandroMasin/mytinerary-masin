import { Navigate, useLocation, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import './styles.css'
import { Link as Anchor } from 'react-router-dom'
import Itinerary from '../../components/Itinerary/Itinerary';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
import cityActions from '../../store/actions/city';
import { useDispatch, useSelector } from 'react-redux';

function City() {

  const { id } = useParams()

  const location = useLocation()

  useEffect( () => {
    window.scrollTo(0,0)
  }, [location])

  let cityInStore = useSelector(store => store.cityReducer)
  console.log("cityInStore", cityInStore.city);

  const dispatch = useDispatch()

  let ciudad = cityInStore.city

  // document.title = `My Tinerary | ${ciudad.ciudad}`;

  useEffect(() => {
    if (ciudad.ciudad) {
      document.title = `My Tinerary | ${ciudad.ciudad}`;
    }
  }, [ciudad.ciudad]);

  useEffect(() => {

    try {

      dispatch(cityActions.get_city(id))

      return ()  => dispatch(cityActions.resetCity())

    } catch (error) {
      console.error('Error fetching data:', error);
    }


  }, [dispatch, id]);

  let itinerarios = []

  if (ciudad.itineraries && ciudad.itineraries.length > 0) {
    itinerarios = ciudad.itineraries;
  }

  console.log("itinerarios", itinerarios);

  return (
    <>
      {!ciudad

        ?
        (
          <Navigate to="/cities" />
        ) :
        (
          <div className="contenedor_city p-2">

            <section className='city'>
              <h2>{ciudad.ciudad}</h2>
              <h3>{ciudad.pais}</h3>
              <div className='d-flex justify-content-center align-items-center pb-5'>
                <img className='img-fluid' src={ciudad?.imagen} alt={ciudad?.ciudad} />
              </div>

              
                {itinerarios.length > 0 ? (
                  itinerarios.map((itinerario, index) => (
                    <div key={index}>
                      <Itinerary
                        nombre={itinerario.nombre}
                        description={itinerario.descripcion}
                        precio={itinerario.precio}
                        likes={itinerario.likes.length}
                        hashtags={itinerario.hashtags}
                        duracion={itinerario.duracion}
                        id={index} 
                      />
                    </div>
                  ))
                ) : (
                  <h2>Without itineraries</h2>
                )}

            </section >

            <Anchor to="/cities"><h3 className='p-3'>Back to cities</h3></Anchor>

          </div >
        )
      }

    </>
  );

}

export default City