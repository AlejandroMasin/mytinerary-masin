import './styles.css'
import person from '../../../public/redes/person.svg'

import { Link as Anchor } from 'react-router-dom'

function Nav() {
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Anchor to="/" className="navbar-brand">My Tinerary</Anchor>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end mb-2 mt-2" id="navbarText">
                        <ul className="navbar-nav align-items-end mb-2 mb-lg-0">
                            <li className="nav-item">

                                <Anchor to="/" className="nav-link active" aria-current="page">Home</Anchor>

                            </li>
                            <li className="nav-item">
                                <Anchor to="/cities" className="nav-link active">Cities</Anchor>
                            </li>

                            <li className="nav-item">
                                <Anchor className="nav-item btn btn-primary" to="/login" >
                                    <img src={person} alt="logo persona" />
                                    Login
                                </Anchor>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Nav