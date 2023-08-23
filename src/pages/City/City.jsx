import { Navigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import './styles.css'
// import cities from '../../../public/data_cities.json'
import en_construccion from '../../../public/construccion.jpg'
import { Link as Anchor } from 'react-router-dom'

function City() {

  const { id } = useParams()

  const [ciudad, setCiudad] = useState({});

  useEffect(() => {
    async function fetchCiudad() {
      try {
        const response = await fetch(`http://localhost:4000/api/city/${id}`);

        if (!response.ok) {
          throw new Error(`Ciudad no encontrada: ${response.status}`);
        }

        const data = await response.json();

        setCiudad(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchCiudad();
  }, [id]);

  console.log(id);
  console.log(Object.keys(ciudad).length);

  return (
    <>
      {!ciudad
        // Object.keys(ciudad).length == 0
        ?
        (
          <Navigate to="/cities" /> // Redirigir a otra página de error si no se encuentra la ciudad
        ) :
        (
          <div className="contenedor_city">

            <section className='city'>
              <h2>{ciudad.ciudad}</h2>
              <h3>{ciudad.pais}</h3>
              <div className='d-flex justify-content-center align-items-center'>
                <img className='img-fluid' src={ciudad?.imagen} alt={ciudad?.ciudad} />
              </div>

              <Anchor to="/cities"><h3 className='p-3'>Back to cities</h3></Anchor>

            </section>

            <div className='img_en_construccion' >
              <img className='img-fluid' src={en_construccion} alt="" />
            </div>
          </div>
        )
      }

    </>
  );

}

export default City