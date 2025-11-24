import {useNavigate } from "react-router-dom";
import BannerDetail from "../../components/BannerDetail";
import BannerMask from "../../components/BannerMask";
import ContentCard from "../../components/ContentCard";
import ImageBanner from "../../components/ImageBanner";
import ScrollableSection from "../../components/ScrollableSection";
import SectionScroll from "../../components/ScrollableSection/SectionScroll";


const Series = () => {
    const navigate = useNavigate();
    return (
        <div>
            <ImageBanner />
            <BannerDetail />
            <BannerMask>
                <ScrollableSection title="Popular Movies">
                    
                {[...Array(12).keys()].map((index) => (
                    <SectionScroll key={index}>
                        <ContentCard
                            onClik={() => navigate("/content-detail")}
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

export default Series;