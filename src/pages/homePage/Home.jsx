import { fetchData } from 'components/serverApi';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './home-style.css';
import PropTypes from 'prop-types';

const Home = () => {
  const [films, getFilms] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchData().then(({ results }) => getFilms(results));
  }, []);

  return (
    <div className="header">
      <ul className="header__list">
        {films.map(({ title, id }) => {
          return (
            <li key={id} className="header__item">
              <Link
                to={`/movies/${id}`}
                state={{ from: location }}
                className="header__link"
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Home.prototype = {
  results: PropTypes.object.isRequired,
};

export default Home;