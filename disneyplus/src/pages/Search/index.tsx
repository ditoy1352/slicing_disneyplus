import { use, useState } from 'react'
import ContentCard from '../../components/ContentCard'
import styles from './index.module.css'
import useFetch from '../../hooks/useFetch';
import { API_KEY } from '../../constant';
import useDebounce from '../../hooks/useDebounce';
const Search = () => {
    const [search, setSearch] = useState('');

    const debounced = useDebounce(search, 500);
    
    const { data: moviedata, loading:movieLoading } = useFetch(
       `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${debounced}`
    )
    const { data: tvData, loading:tvLoading } = useFetch(
       `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${debounced}`
    )

    console.log(moviedata, tvData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
     return (
    <div>
      <div className={styles.searchBar}>
        <span className="material-symbols-outlined">search</span>
        <input
          value={search}
          onChange={handleChange}
          type="text"
          placeholder="Movies, shows and more"
        />
      </div>

      {movieLoading || tvLoading ? (
        <div>
          <h1
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            Loading...
          </h1>
        </div>
      ) : (
        <>
          <h1
            style={{
              color: "white",
            }}
          >
            Movies
          </h1>
          <div className={styles.contentGrid}>
            {moviedata?.results &&
              moviedata.results.map((movieItem: any) => (
                <ContentCard
                  key={movieItem.id}
                  title={movieItem.title}
                  paragraft={movieItem.overview}
                  poster={`https://image.tmdb.org/t/p/w342/${movieItem.poster_path}`}
                  banner={`https://image.tmdb.org/t/p/w342/${movieItem.backdrop_path}`}
                />
              ))}
          </div>
          <h1
            style={{
              color: "white",
            }}
          >
            TV Series
          </h1>
          <div className={styles.contentGrid}>
            {tvData?.results &&
              tvData.results.length > 0 &&
              tvData.results.map((tvItem: any) => (
                <ContentCard
                  title={tvItem.name}
                  paragraft={tvItem.overview}
                  poster={`https://image.tmdb.org/t/p/w342/${tvItem.poster_path}`}
                  banner={`https://image.tmdb.org/t/p/w342/${tvItem.backdrop_path}`}
                />
              ))}
          </div>
        </>
      )}
    </div>
  );
};


export default Search