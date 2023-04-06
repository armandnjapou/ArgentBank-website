import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearMessage } from "../features/message/message";
import { signout } from "../features/auth/authSlice";

const NavBar = () => {

    const { isLoggedIn } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const logout = () => {
        dispatch(signout());
    };

    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="/">
                <img
                    className="main-nav-logo-image"
                    src='/img/argentBankLogo.png'
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                <a className="main-nav-item" href={isLoggedIn ? '/' : '/sign-in'} onClick={logout}>
                    <i className={isLoggedIn ?  "fa fa-check" : "fa fa-user-circle"}></i>
                    { isLoggedIn ?  'Sign Out' : 'Sign In'}
                </a>
            </div>
        </nav>
    );
}

export default NavBar;