import { useState, useEffect } from 'react';
import { Link as Anchor } from 'react-router-dom';
import axios from 'axios';
import google from '/1534129544.png';

import register from '/draw1.webp';
import './Styles.css';

function Register() {
  const [countries, setCountries] = useState([]);

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

                        <form className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-0">
                            <div className="form-outline flex-fill mb-0">
                              <input
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
                              <input
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
                              <input
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
                              <select
                                id="formCountry"
                                className="form-select form-control"
                                required
                              >
                                <option value="" disabled selected>
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
                              <input
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
                              <input
                                type="password"
                                id="form3Example4c"
                                className="form-control"
                                required
                              />
                              <label className="form-label" htmlFor="form3Example4c">
                                Password
                              </label>
                            </div>
                          </div>

                          <p className="mt-3 text-center">
                            Do you already have <br /> an account?{' '}
                            <Anchor to="/login">Sign in</Anchor>
                          </p>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="button" className="btn btn-primary btn-lg">
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
