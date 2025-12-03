import { useParams } from "react-router-dom";
import BannerDetail from "../../components/BannerDetail";
import BannerMask from "../../components/BannerMask";
import ImageBanner from "../../components/ImageBanner";
import EpisodeItem from "./episode";
import styles from "./index.module.css"
import useFetch from "../../hooks/useFetch";
import { API_KEY } from "../../constant";
import { useState } from "react";


const ContentTvSeriesDetail = () => {
    const [activeSeason, setActiveSeason] = useState(0);

    const { id } = useParams();
    const { data } = useFetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`);
    const { data: seasonData } = useFetch(`https://api.themoviedb.org/3/tv/${id}/season/${activeSeason}?api_key=${API_KEY}`);
    return (
        <div>
            <ImageBanner
                src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
                alt={data?.name || ""}
            />
            <BannerDetail
                overview={data?.overview || ""}
                title={data?.name || ""}
                releaseDate={data?.first_air_date || ""}
                language={data?.original_language || ""}
                genres={data?.genres?.map((genre: any) => ({
                    id: genre.id,
                    name: genre.name
                })) || []}
            />
            <BannerMask>
                <h1 className={styles.SeasonTitle}>Season</h1>
                <div className={styles.tabsSection}>
                    {data?.seasons?.map((season: any) => {
                        return <span data-active={season.season_number === activeSeason} 
                        onClick={() => setActiveSeason(season.season_number)} key={season.id} 
                        className={styles.tabItem}>{season.name}</span>
                    })}
                </div>
                <div>
                    {
                        seasonData?.episodes?.map((episode: any) => (
                            <EpisodeItem
                                key={episode.id}
                                imageUrl={`https://image.tmdb.org/t/p/w500/${episode.still_path}`}
                                title={episode.name}
                                season={episode.season_number}
                                episode={episode.episode_number}
                                duration={`${episode.runtime || 30}m`}
                                date={episode.air_date}
                                desc={episode.overview}
                            />
                        ))
                    }
                </div>
            </BannerMask>
        </div>
    )
}

export default ContentTvSeriesDetail;