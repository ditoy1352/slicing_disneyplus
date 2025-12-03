import { useNavigate } from "react-router-dom";
import BannerDetail from "../../components/BannerDetail";
import BannerMask from "../../components/BannerMask";
import ContentCard from "../../components/ContentCard";
import ImageBanner from "../../components/ImageBanner";
import ScrollableSection from "../../components/ScrollableSection";
import SectionScroll from "../../components/ScrollableSection/SectionScroll";
import useFetch from "../../hooks/useFetch";
import useGenres from "../../hooks/useGenre";
import useMapGenreIdtoName from "../../hooks/useMapGenreIdToName";

const Movies = () => {

  const { loading, data } = useFetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=f50d225e3cdac99285cf26d45fe45733`
  );

  // const { genres: allGenres, loading: loadingGenres } = useGenres(); // NEW: fetch all genres
  const { genres } = useGenres();

  const firstContent = data?.results?.[0] || {};

  const processedGenres = useMapGenreIdtoName(firstContent.genre_ids, genres); // NEW: process genres

  const navigate = useNavigate();
  return (
    <div>
      <ImageBanner 
      alt={firstContent.title} 
      src={`https://image.tmdb.org/t/p/original/${firstContent.backdrop_path}`} />
      <BannerDetail 
      title={firstContent.title || firstContent.name}
      overview={firstContent.overview}
      releaseDate={firstContent.release_date || firstContent.first_air_date}
      genres={processedGenres} // MODIFIED PROP
      language={firstContent.original_language}      
      />
      <BannerMask>
        <ScrollableSection title="Trending Now">
          {!loading &&
            data &&
            data.results &&
            data.results.map((content: any) => (
              <SectionScroll key={content.id}>
                <ContentCard
                  onClick={() =>
                    navigate(`/movie/${content.id}`)
                  }
                  title={content.title || firstContent.name}
                  paragraft={content.overview}
                  poster={`https://image.tmdb.org/t/p/w500/${content.poster_path}`}
                  banner={`https://image.tmdb.org/t/p/w500/${content.backdrop_path}`}
                />
              </SectionScroll>
            ))}
        </ScrollableSection>
      </BannerMask>
    </div>
  )
}

export default Movies;