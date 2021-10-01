import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                    <NavLink
                        to="/"
                        className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none me-3">
                        Task Manager
                    </NavLink>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><NavLink to="/" className="nav-link px-2 text-secondary" exact>Главная</NavLink></li>
                        <li><NavLink to="/about" className="nav-link px-2 text-secondary">Информация</NavLink></li>
                    </ul>

                </div>
            </div>
        </header>
    )
}