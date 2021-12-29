import { Link } from 'react-router-dom';
import { Outlet } from 'react-router';
function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-light">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/colorsPage">Colors Page</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/checkList">List</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    )
};
export default Header;