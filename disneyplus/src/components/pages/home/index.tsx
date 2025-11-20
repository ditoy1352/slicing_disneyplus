import BannerDetail from "../../BannerDetail/index";
import BannerMask from "../../BannerMask/index"; 
import ContentCard from "../../ContentCard";
import ImageBanner from "../../ImageBanner/index";


const Home = () => {
    return (
        <div>
            <ImageBanner/>
            <BannerMask/>
            <BannerDetail/>

            <div style={
            {width: "200px"}
            }>
            <ContentCard
            title="Whiplash"
            paragraft="lorem ipsum dolot sit amet amit punya cewe jelek jangan sampe loh ya"
            banner="https://wallpapercave.com/wp/wp1951947.jpg"
            poster="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7fn624j5lj3xTme2SgiLCeuedmO.jpg"
            />
            </div>
        </div>
    )
}

export default Home;