import { useEffect, useState } from 'react';
import './styles.css'

function RandomUser() {
  const [userData, setUserData] = useState({ name: { first: '', last: '' }, picture: { large: '' } });

  useEffect(() => {
    function fetchUser() {
        fetch("https://randomuser.me/api/?inc=name,picture&nat=US")
          .then(response => response.json())
          .then(data => {
            createCard(data.results[0]);
          })
          .catch(error => {
            console.error("Hubo un error al hacer la solicitud:", error);
          });
      }

      fetchUser()
  }, []);



  function createCard(data) {
    setUserData(data);
  }

  return (
    <div className="card_user">
      <img src={userData.picture.large} alt="Imagen" />
      <h3>{`${userData.name.first} ${userData.name.last}`}</h3>
    </div>
  );
}

export default RandomUser;