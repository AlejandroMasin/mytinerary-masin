import { Navigate, useParams } from 'react-router-dom'
// import { useState, useEffect } from 'react';
import './styles.css'
import cities from '../../../public/data_cities.json'
import en_construccion from '../../../public/construccion.jpg'
import { Link as Anchor } from 'react-router-dom'


function City() {

  // const [ciudad, setCiudad] = useState([]);

  // useEffect(() => {
  //   async function fetchCiudad() {
  //     try {
  //       const response = await fetch('../../../public/data_cities.json');

  //       const data = await response.json();
  //       setCiudad(data);
  //       console.log(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   }

  //   fetchCiudad();
  // }, []);

  const { id } = useParams()

  const id_cities = cities?.find(city => city.id == id);

  return (
    <>
      {!id_cities ?
        (
          <Navigate to="/cities/city/" /> // Redirigir a la página de error si no se encuentra la ciudad
        ) :
        (
          <div className="contenedor_city">
            <section className='city'>
              <h2>{id_cities.ciudad}</h2>
              <div className='d-flex justify-content-center align-items-center'>
                <img className='img-fluid' src={id_cities?.imagen} alt={id_cities?.ciudad} />
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