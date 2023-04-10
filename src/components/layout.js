import { Outlet, NavLink } from 'react-router-dom';
import './layout.css';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <div>
      <header>
        <ul className="menu">
          <li className="menu__list">
            <NavLink to="/" className="menu__item">
              Home
            </NavLink>
          </li>
          <li className="menu__list">
            <NavLink to="/movies" className="menu__item">
              Movies
            </NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
export default Layout;