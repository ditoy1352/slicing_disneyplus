import BannerDetail from "../../BannerDetail/index";
import BannerMask from "../../BannerMask/index";
import ContentCard from "../../ContentCard";
import ImageBanner from "../../ImageBanner/index";
import ScrollableSection from "../../ScrollableSection";
import SectionScroll from "../../ScrollableSection/SectionScroll";


const Home = () => {
    return (
        <div>
            <ImageBanner />
            <BannerDetail />
            <BannerMask>
                <ScrollableSection title="Popular Movies">
                    
                {Array(12).fill(0).map((_, index) => (
                    <SectionScroll>
                        <ContentCard
                            title="Whiplash"
                            paragraft="lorem ipsum dolot sit amet amit punya cewe jelek jangan sampe loh ya"
                            banner="https://wallpapercave.com/wp/wp1951947.jpg"
                            poster="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7fn624j5lj3xTme2SgiLCeuedmO.jpg"
                        />
                    </SectionScroll>
                ))}
                </ScrollableSection>
            </BannerMask>
        </div>
    )
}

export default Home;