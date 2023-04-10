import { Route, Routes } from 'react-router-dom';
// import Layout from './layout';
// import Movies from '../pages/filmFind/Movies';
// import DetalFilms from '../pages/DetalFilm/DetalFilms';
// import Home from '../pages/homePage/Home';
// import MoviesCast from './movies/cast/MoviesCast';
// import MoviesReviews from './movies/review/MoviesReviews';
import { lazy } from 'react';

const Movies = lazy(() => import('../pages/filmFind/Movies'));
const DetalFilms = lazy(() => import('../pages/DetalFilm/DetalFilms'));
const Home = lazy(() => import('../pages/homePage/Home'));
const MoviesCast = lazy(() => import('./movies/cast/MoviesCast'));
const Layout = lazy(() => import('./layout'));
const MoviesReviews = lazy(() => import('./movies/review/MoviesReviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<DetalFilms />}>
          <Route path="cast" element={<MoviesCast />} />
          <Route path="reviews" element={<MoviesReviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};