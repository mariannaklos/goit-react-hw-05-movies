import { fetchDetalsFilm } from 'components/serverApi';
import { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Suspense } from 'react';
import './detalFilms.css';

const DetalFilms = () => {
  const [filmInfo, setFilmInfo] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location?.state?.from ?? '/movies');

  useEffect(() => {
    fetchDetalsFilm(movieId).then(resp => setFilmInfo(resp.data));
  }, [movieId]);
  return (
    <div className="info__mov">
      <Link to={backLinkLocationRef.current} className="btn">
        Back
      </Link>
      <img
        src={`https://image.tmdb.org/t/p/original/${filmInfo.backdrop_path}`}
        alt={filmInfo.title}
        width="600px"
      />
      <h2>{filmInfo.original_title}</h2>
      <p>{filmInfo.overview}</p>
      <div>
        <Link to="cast" className="btn">
          Cast
        </Link>
        <Link to="reviews" className="btn">
          Reviews
        </Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default DetalFilms;

DetalFilms.prototype = {
  resp: PropTypes.array.isRequired,
};