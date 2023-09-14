import './styles.css'
import person from '../../../public/redes/person.svg'

import { Link as Anchor, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/actions/userActions';
// import Confetti from 'react-confetti/dist/types/Confetti';

import Confetti from '../Confetti/Confetti'


function Nav() {

    const user = useSelector(store => store.user.user)

    const dispatch = useDispatch()

    const navigate = useNavigate()


    const handleClick = () => {
        dispatch(logout())
        navigate("/login");

    }

    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Anchor to="/" className="navbar-brand">My Tinerary</Anchor>
                    {
                        user ?
                            (
                                <>
                                    <div className='text-success'>{user?.name} {user?.lastname + ":"}</div>
                                    <img src={user?.image} width={30} alt="" />
                                </>
                            ) :
                            <div></div>
                    }



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

                            {
                                user
                                    ? (
                                        <>
                                            <button className="nav-item btn btn-primary" onClick={handleClick}>
                                                Log out
                                            </button>

                                            <Confetti />
                                        </>

                                    )
                                    : (
                                        <>
                                            <li className="nav-item">
                                                <Anchor className="nav-item btn btn-primary" to="/login" >
                                                    <img src={person} alt="logo persona" />
                                                    Login
                                                </Anchor>
                                            </li>
                                        </>)
                            }
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Nav