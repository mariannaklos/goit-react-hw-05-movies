import { fetchCast } from 'components/serverApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
export const MoviesCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCast(movieId).then(({ cast }) => setCast(cast));
  }, [movieId]);
  return (
    <div>
      <ul>
        {cast.map(({ character, name, id, profile_path }) => {
          return (
            <li key={id}>
              <h2>{name}</h2>
              <p>{character}</p>
              <img
                src={`https://image.tmdb.org/t/p/original/${profile_path}`}
                alt="avatar"
                width="200px"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

MoviesCast.prototype = {
  cast: PropTypes.object.isRequired,
};

export default MoviesCast;