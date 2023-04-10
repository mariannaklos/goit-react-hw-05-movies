import { fetchReviews } from 'components/serverApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MoviesReviews = () => {
  const [rewiev, setRewiev] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviews(movieId).then(({ results }) => setRewiev(results));
  }, [movieId]);

  return (
    <div>
      <ul>
        {rewiev.length > 1 ? (
          rewiev.map(({ author, content, id, avatar_path }) => {
            return (
              <li key={id}>
                <h2>{author}</h2>
                <p>{content}</p>
                <img
                  src={`https://image.tmdb.org/t/p/original/${avatar_path}`}
                  alt="avatar"
                />
              </li>
            );
          })
        ) : (
          <h2>немає відгуків</h2>
        )}
      </ul>
    </div>
  );
};

MoviesReviews.prototype = {
  results: PropTypes.object.isRequired,
};

export default MoviesReviews;