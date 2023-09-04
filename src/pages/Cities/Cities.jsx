import { useState, useEffect } from 'react';
import './styles.css';
import { Link as Anchor } from 'react-router-dom'
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import citiesActions from '../../store/actions/cities';


function Cities() {

  useEffect(() => {
    document.title = "My Tinerary | Cities";
  }, []);

  // const [ciudades, setCiudades] = useState([]);
  const [inputValue, setInputValue] = useState('');

  let citiesInStore = useSelector(store => store.citiesReducer)
  console.log(citiesInStore);

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(citiesActions.get_cities())

  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const ciudadesFiltrados = citiesInStore.cities.filter(ciudad =>
    ciudad.ciudad.toLowerCase().startsWith(inputValue.toLowerCase())
  );

  return (
    <>
      <div className="search">
        <div className="input-group rounded">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div id="contenedor_cards" className="container d-flex justify-content-center align-items-center flex-wrap">
        {ciudadesFiltrados.length === 0
          ?
          (
            <div className='vh-100 vw-100'>
              <h2>Sin resultados</h2>
            </div>

          )
          :
          (
            ciudadesFiltrados.map((ciudad, index) => (
              <div className='contenedor_cards_imagen' key={index}>
                <img src={ciudad.imagen} alt="" />
                <h5>{ciudad.ciudad}</h5>
                {/* <button >Mas info</button> */}
                <Anchor className="btn btn-danger" to={`/cities/city/${ciudad._id}`}>More info</Anchor>

              </div>
            ))
          )}
      </div>
    </>
  );
}

export default Cities;
