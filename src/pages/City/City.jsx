import { Navigate, useParams } from 'react-router-dom'
import './styles.css'
import cities from '../../db/data_cities.json'
import en_construccion from '../../../public/building-under-construction-site-free-vector.jpg'
import { Link as Anchor } from 'react-router-dom'


function City() {

  const { id } = useParams()

  const id_cities = cities?.find(city => city.id == id);

  // console.log(cities);
  console.log(id_cities);

  return (
    <>
      {!id_cities ?
        (
          <Navigate to="/cities/city/" /> // Redirigir a la página de error si no se encuentra la ciudad
        ) :
        (
          <div className="container">
            <section className='city'>
              <h2>{id_cities.ciudad}</h2>
              <div className='d-flex justify-content-center align-items-center'>
                <img className='img-fluid' src={id_cities?.imagen} alt={id_cities?.ciudad} />
              </div>

              <Anchor to="/cities"><h3 className='p-3'>Back to cities</h3></Anchor>

            </section>

            <div className='d-flex justify-content-center align-items-center' >
              <img className='img-fluid img_en_construccion' src={en_construccion} alt="" />
            </div>
          </div>
        )
      }

    </>
  );

}

export default City