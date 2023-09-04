import { useEffect } from 'react';
import './Styles.css';
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import clientsActions from '../../store/actions/clients';
// import { store } from '../../store/store';

function Usuarios() {
  // const [usuarios, setUsuarios] = useState([]);

  let clientsInStore = useSelector(store => store.clientsReducer)

  let clientes = clientsInStore.clients.usuarios
  console.log(clientes);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(clientsActions.get_clients())
  }, []);

  if (clientes) {
    return (
      <div className='contenedor_usuarios'>
        {clientes.map((usuario, index) => (
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
}

export default Usuarios;
