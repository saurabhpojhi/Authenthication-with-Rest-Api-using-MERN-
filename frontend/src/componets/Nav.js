import React from 'react';
import {
    Link, useNavigate
} from 'react-router-dom';
const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/register')
    }
    return (
        <div>
            <img
                alt='logo'
                className='logo'
                src='https://yt3.ggpht.com/ytc/AKedOLR09bCpy_XTq2scU91URc0pWG0EqS_Yc_Zg-r9pBQ=s900-c-k-c0x00ffffff-no-rj' />
            {
                auth ?

                    <ul className="nav-ul">
                        <li><Link to="/">Note</Link></li>
                        <li><Link to="/AddNote">Add Note</Link></li>
                        <li><Link to="/">Folder</Link></li>
                        <li><Link to="/AddFolder">Add Folder </Link></li>

                        <li> <Link onClick={logout} to="/register">Logout ({JSON.parse(auth).name})</Link></li>
                    </ul>
                    :
                    <ul className="nav-ul nav-right">
                        <li> <Link to="/register">Sign Up</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
            }


        </div>
    )
}

export default Nav;