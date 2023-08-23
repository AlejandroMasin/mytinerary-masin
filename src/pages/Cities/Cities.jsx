import { useState, useEffect } from 'react';
import './styles.css';
import { Link as Anchor } from 'react-router-dom'


function Cities() {
  const [ciudades, setCiudades] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    async function fetchCiudades() {
      try {
        const response = await fetch('http://localhost:4000/api/cities');
        const data = await response.json();
        setCiudades(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchCiudades();
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const ciudadesFiltrados = ciudades.filter(ciudad =>
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
          <h2>Sin resultados</h2>
        )
        :
         (
          ciudadesFiltrados.map((ciudad, index) => (
            <div className='contenedor_cards_imagen' key={index}>
              <img src={ciudad.imagen} alt="" />
              <h5>{ciudad.ciudad}</h5>
              {/* <button >Mas info</button> */}
              <Anchor className="btn btn-danger" to={`/cities/city/${ciudad._id}`}>Mas info</Anchor>

            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Cities;
