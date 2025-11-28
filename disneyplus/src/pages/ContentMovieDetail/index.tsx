import BannerDetail from "../../components/BannerDetail";
import BannerMask from "../../components/BannerMask";
import ImageBanner from "../../components/ImageBanner";
import EpisodeItem from "./episode";
import styles from "./index.module.css"


const ContentMovieDetail = () => {
    return (
        <div>
            <ImageBanner />
            <BannerDetail />
            <BannerMask>
                <h1 className={styles.SeasonTitle}>Season</h1>
                    <div className={styles.tabsSection}>
                        <span>Season 1</span>
                    </div>
                <div>
                <EpisodeItem
            imageUrl=""
            title="Episode Title"
            season={1}
            episode={1}
            duration="32m"
            date="01-01-2024"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla"
          />
                </div>
            </BannerMask>
        </div>
    )
}

export default ContentMovieDetail;