import { useState, useEffect, useRef } from 'react';
import { Link as Anchor, useNavigate } from 'react-router-dom';
import axios from 'axios';
import google from '/1534129544.png';

import register from '/draw1.webp';
import './Styles.css';
import { useDispatch } from 'react-redux';
import { signUp } from '../../store/actions/userActions';
import { toast } from 'react-toastify';


function Register() {
  const [countries, setCountries] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState('password');

  const navigate = useNavigate()


  useEffect(() => {
    axios
      .get('countries.json')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.error('Error al cargar el archivo:', error);
      });
  }, []);

  useEffect(() => {
    document.title = 'My Tinerary | Sign Up';
  }, []);

  // Función para manejar el cambio de visibilidad de la contraseña
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setPasswordType(showPassword ? 'password' : 'text');
  };

  const dispatch = useDispatch()

  const name = useRef(null)
  const lastname = useRef(null)
  const image = useRef(null)
  const country = useRef(null)
  const email = useRef(null)
  const password = useRef(null)


  const handleSubmit = (e) => {
    e.preventDefault()

    const aux = [name, lastname, image, country, email, password]

    if (aux.some((campo) => !campo.current.value)) {
      // alert("Todos los campos son obligatorios ")
      //agregar toasty
      toast.error("Todos los campos son obligatorios ");

    } else {
      const body = {
        name: name.current.value,
        lastname: lastname.current.value,
        image: image.current.value,
        country: country.current.value,
        email: email.current.value,
        password: password.current.value
      }

      dispatch(signUp(body)).then((response) => {
        if (response.payload.success) {
          // alert("Bienvenido " + response.payload.user.name);
          toast.success("Register " + response.payload.user.name);

          navigate("/login");
        } else {
          // Mostrar mensaje de error en caso de contraseña o correo incorrectos
          // alert("Contraseña o email incorrecto");
          toast.error("Comprueba todos los campos y que el email no esté en uso");

        }
      });
    }

  }


  //   {
  //     "name": "John",
  //     "lastname": "Doe2",
  //     "image": "https://t1.ea.ltmcdn.com/es/posts/7/4/3/como_ayudar_a_un_gatito_a_defecar_20347_600.jpg",
  //     "country": "United States",
  //     "email": "pruebamiemail4@email.com",
  //     "password": "Hashedpassword1234"
  // }

  return (
    <>
      <div className="container_sign_up">
        <section>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{ borderRadius: '25px' }}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mx-1 mx-md-4 mt-1">Sign up</p>

                        <div className="mt-5">
                          <div className="justify-content-center">
                            <div className="md-6">
                              <a href="#" className="btn btn-primary my-3">
                                {' '}
                                <img className="px-1" src={google} alt="" />
                                Register with Google
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="py-1">OR</div>

                        <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                          <div className="d-flex flex-row align-items-center mb-0">
                            <div className="form-outline flex-fill mb-0">
                              <input ref={name}
                                type="text"
                                id="form3Example1c"
                                className="form-control"
                                required
                              />
                              <label className="form-label" htmlFor="form3Example1c">
                                Your Name
                              </label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-0">
                            <div className="form-outline flex-fill mb-0">
                              <input ref={lastname}
                                type="text"
                                id="formLastName"
                                className="form-control"
                                required
                              />
                              <label className="form-label" htmlFor="formLastName">
                                Your Last Name
                              </label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-0">
                            <div className="form-outline flex-fill mb-0">
                              <input ref={image}
                                type="text"
                                id="formAvatar"
                                className="form-control"
                                required
                              />
                              <label className="form-label" htmlFor="formAvatar">
                                URL Avatar
                              </label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-0">
                            <div className="form-outline flex-fill mb-0">
                              <select ref={country}
                                id="formCountry"
                                className="form-select form-control"
                                required
                              >
                                <option value="" disabled defaultValue >
                                  Select a Country:
                                </option>
                                {countries.map(country => (
                                  <option key={country.id} value={country.name}>
                                    {country.name}
                                  </option>
                                ))}
                              </select>
                              <label className="form-label" htmlFor="formCountry">
                                Country
                              </label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-0">
                            <div className="form-outline flex-fill mb-0">
                              <input ref={email}
                                type="email"
                                id="form3Example3c"
                                className="form-control"
                                required
                              />
                              <label className="form-label" htmlFor="form3Example3c">
                                Your Email
                              </label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-0">
                            <div className="form-outline flex-fill mb-0">
                              <input ref={password}
                                type={passwordType}
                                id="form3Example4c"
                                className="form-control"
                                required
                              />
                              <label className="form-label" htmlFor="form3Example4c">
                                Password
                              </label>
                            </div>
                            <div className="form-check ms-2 mb-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="showPassword"
                                onChange={togglePasswordVisibility}
                              />
                              <label className="form-check-label" htmlFor="showPassword">
                                Show
                              </label>
                            </div>
                          </div>

                          <p className="mt-3 text-center">
                            Do you already have <br /> an account?{' '}
                            <Anchor to="/login">Sign in</Anchor>
                          </p>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button className="btn btn-primary btn-lg">
                              Register
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img src={register} className="img-fluid img-register" alt="Sample image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Anchor to="/">
        <h4 className="p-3">Go to home</h4>
      </Anchor>
    </>
  );
}

export default Register;
