import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchMovieId } from '../../components/serverApi';
import PropTypes from 'prop-types';
import './findFilm-styled.css';
export const Movies = () => {
  const [serch, setSerch] = useSearchParams();
  const [getMovies, setGetMovies] = useState([]);
  const [valueInput, setValueInput] = useState({});
  const location = useLocation();
  const findNameFilms = serch.get('qury') ?? '';

  useEffect(() => {
    if (findNameFilms !== null) {
      searchMovieId(findNameFilms).then(resp => setGetMovies(resp.results));
    }
  }, [findNameFilms]);

  const updateQueryString = name => {
    const nameMov = name.target.value;
    const quryMov = nameMov !== '' ? { qury: nameMov } : {};
    setValueInput(quryMov);
  };

  const submitForm = e => {
    e.preventDefault();
    setSerch(valueInput);
    setValueInput({});
  };
  return (
    <div className="find__mov">
      <form onSubmit={submitForm}>
        <input type="text" onChange={updateQueryString} className="inputFilm" />
        <button type="submit" className="btn__find">
          send
        </button>
      </form>
      <ul className="mov__list">
        {findNameFilms.length > 1 ? (
          getMovies.map(({ title, id }) => {
            return (
              <li key={id}>
                <Link
                  state={{ from: location }}
                  to={`/movies/${id}`}
                  className="mov__link"
                >
                  {title}
                </Link>
              </li>
            );
          })
        ) : (
          <li></li>
        )}
      </ul>
    </div>
  );
};

Movies.prototype = {
  resp: PropTypes.array.isRequired,
};

export default Movies;