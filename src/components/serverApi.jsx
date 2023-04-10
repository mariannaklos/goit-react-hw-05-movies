import axios from 'axios';

const URL_BASA = 'https://api.themoviedb.org';
const key = 'e74f8e13c620ae3b84b14599ba3d0b44';

async function searchMovieId(qury) {
  try {
    const resp = await axios.get(`${URL_BASA}/3/search/movie?api_key=e74f8e13c620ae3b84b14599ba3d0b44&language=en-US&query=${qury}&page=1&include_adult=false`);
    return resp.data;
   
  } catch (error) {
    console.error(error);
  }
}

async function fetchReviews(id) {
  try {
    const resp = await axios.get(`${URL_BASA}/3/movie/${id}/reviews?api_key=${key}`);
    return resp.data;
  } catch (error) {
    console.error(error);
  }
}

async function fetchCast(id) {
  try {
    const resp = await axios.get(`${URL_BASA}/3/movie/${id}/credits?api_key=${key}`);
    return resp.data;
  } catch (error) {
    console.error(error);
  }
}

async function fetchData(q) {
  try {
    const resp = await axios.get(
      `${URL_BASA}/3/trending/movie/week?api_key=${key}`
    );
    return resp.data;
  } catch (error) {
    console.error(error);
  }
}

async function fetchDetalsFilm(id) {
  try {
    const resp = await axios.get(`${URL_BASA}/3/movie/${id}?api_key=${key}`);
    return resp;
  } catch (error) {
    console.error(error);
  }
}
export { fetchData, fetchDetalsFilm, fetchReviews, fetchCast, searchMovieId };