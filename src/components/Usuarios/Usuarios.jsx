import { useEffect } from 'react';
import './Styles.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import clientsActions from '../../store/actions/clients';
// import { store } from '../../store/store';

function Usuarios() {
  // const [usuarios, setUsuarios] = useState([]);

  let clientsInStore = useSelector(store => store.clientsReducer)

  console.log("clients", clientsInStore);

  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchUsuarios() {
      try {
        const response = await axios.get('/usuarios.json');
        const data = response.data;

        dispatch(clientsActions.add_clients(data.usuarios))

      } catch (error) {
        console.error('Error al cargar datos:', error);
      }
    }

    fetchUsuarios();
  }, []);

  return (
    <div className='contenedor_usuarios'>
      {clientsInStore.clients.map((usuario, index) => (
        <div className='container_usuario' key={index}>
          <p>Nombre: {usuario.nombre}</p>
          <p>Edad: {usuario.edad}</p>
          <p>Correo: {usuario.correo}</p>
          <img className='img_usuario' src={usuario.imagen} alt={`Imagen de ${usuario.nombre}`} />
        </div>
      ))}
    </div>
  );
}

export default Usuarios;
