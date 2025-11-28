import useFetch from "./useFetch";

const useGenres = () => {
  const { data: dataMovieGenre, loading: loadingMovieGenre } = useFetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=f50d225e3cdac99285cf26d45fe45733`
  );
  const { data: dataTvGenre, loading: loadingTvGenre } = useFetch(
    `https://api.themoviedb.org/3/genre/tv/list?api_key=f50d225e3cdac99285cf26d45fe45733`
  );

  return {
    loading: loadingMovieGenre || loadingTvGenre,
    genres: [...(dataMovieGenre?.genres || []), ...(dataTvGenre?.genres || [])],
  };
};

export default useGenres;
