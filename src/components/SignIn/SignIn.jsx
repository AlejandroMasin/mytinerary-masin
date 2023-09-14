import { Link as Anchor, useNavigate } from 'react-router-dom';
import './Styles.css';
import { useEffect, useRef } from 'react';
import google from '/1534129544.png'
import { useDispatch } from 'react-redux';
import { signIn } from '../../store/actions/userActions';
import { toast } from 'react-toastify';

function SignIn() {
  // const handleSubmit = (event) => {
  //   event.preventDefault(); // Evitar que el formulario se envíe
  // };

  useEffect(() => {
    document.title = "My Tinerary | Sign In";
  }, []);

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const email = useRef(null)
  const password = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();

    const aux = [email, password];

    if (aux.some((campo) => !campo.current.value)) {
      toast.info("All fields are required");

      // alert("Todos los campos son obligatorios");
    } else {
      const body = {
        email: email.current.value,
        password: password.current.value,
      };

      dispatch(signIn(body)).then((response) => {
        if (response.payload.success) {
          // alert("Bienvenido " + response.payload.user.name);
          toast.success("Welcome " + response.payload.user.name);

          navigate("/");
        } else {
          // Mostrar mensaje de error en caso de contraseña o correo incorrectos
          // alert("Contraseña o email incorrecto");
          toast.error("Password or email incorrect");

        }
      });
    }
  };


  return (
    <>
      <div className="container-signin">
        <div className="form-signin w-100 m-auto">
          <form onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="mt-5">
              <div className="justify-content-center">
                <div className="md-6">

                  <a href="#" className="btn btn-primary my-3"> <img className='px-1' src={google} alt="" />
                    Login with Google
                  </a>
                </div>
              </div>
            </div>

            <div className='py-1'>
              OR
            </div>

            <div className="form-floating">
              <input ref={email}
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input ref={password}
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <button className="btn btn-primary w-100 py-2" type="submit">
              Sign in
            </button>

            <p className="mt-3">
              Don&apos;t have an account? <Anchor to="/register">Sign up</Anchor>
            </p>
          </form>
        </div>
      </div>

      <Anchor to="/">
        <h5 className="p-3">Go to home</h5>
      </Anchor>
    </>
  );
}

export default SignIn;
