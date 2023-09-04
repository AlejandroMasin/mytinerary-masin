import { Navigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import './styles.css'
import { Link as Anchor } from 'react-router-dom'
import Itinerary from '../../components/Itinerary/Itinerary';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import citiesActions from '../../store/actions/cities';

function City() {

  const { id } = useParams()

  // const [ciudad, setCiudad] = useState({});

  let cityInStore = useSelector(store => store.citiesReducer)
  console.log(cityInStore.cities[0]);

  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchCiudad() {
      try {
        const response = await axios.get(`http://localhost:4000/api/city/${id}`);

        if (response.status !== 200) {
          throw new Error(`Ciudad no encontrada: ${response.status}`);
        }

        const data = response.data;

        // setCiudad(data);

        dispatch(citiesActions.add_cities([data]))


      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchCiudad();
  }, []);

  let ciudad = cityInStore.cities[0]
  let itinerarios = ciudad.itineraries

  // if (cityInStore.itineraries && cityInStore.itineraries.length == 0) {
  //   itinerarios = cityInStore;
  // }

  console.log("itinerarios", itinerarios);

  return (
    <>
      {!cityInStore.cities
        // Object.keys(ciudad).length == 0
        ?
        (
          <Navigate to="/cities" /> // Redirigir a otra página de error si no se encuentra la ciudad
        ) :
        (
          <div className="contenedor_city p-2">

            <section className='city'>
              <h2>{ciudad.ciudad}</h2>
              <h3>{ciudad.pais}</h3>
              <div className='d-flex justify-content-center align-items-center pb-5'>
                <img className='img-fluid' src={ciudad?.imagen} alt={ciudad?.ciudad} />
              </div>

              <div>
                {itinerarios.length > 0 ? (
                  itinerarios.map((itinerario, index) => (
                    <div key={index}>
                      <Itinerary nombre={itinerario.nombre} precio={itinerario.precio} likes={itinerario.likes.length} hashtags={itinerario.hashtags} duracion={itinerario.duracion} />
                    </div>
                  ))
                ) : (
                  <h2>Without itineraries</h2>
                )}
              </div>

            </section >

            <Anchor to="/cities"><h3 className='p-3'>Back to cities</h3></Anchor>

          </div >
        )
      }

    </>
  );

}

export default City