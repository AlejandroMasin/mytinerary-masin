import { Link as Anchor } from 'react-router-dom';
import './Styles.css';
import { useEffect } from 'react';
import google from '/1534129544.png'

function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe
  };

  useEffect(() => {
    document.title = "My Tinerary | Sign In";
  }, []);

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
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
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
