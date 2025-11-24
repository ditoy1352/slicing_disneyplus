import ContentCard from '../../components/ContentCard'
import styles from './index.module.css'
const Search = () => {
    return (
        <div className={styles.container}>
            <div className={styles.searcbar}>
                <span style={
                    {color:'white'}
                }
                className= "material-symbols-outlined"
                >
                 search   
                </span>
                <input type="text" placeholder='movies, show and more'/>
            </div>
            <div className={styles.contentgrid}>
                {Array(15).fill(0).map((_, index) => (
                     <ContentCard
                            title="Whiplash"
                            paragraft="lorem ipsum dolot sit amet amit punya cewe jelek jangan sampe loh ya"
                            banner="https://wallpapercave.com/wp/wp1951947.jpg"
                            poster="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7fn624j5lj3xTme2SgiLCeuedmO.jpg"
                        />
                ))}
            </div>
        </div>
    )
}

export default Search