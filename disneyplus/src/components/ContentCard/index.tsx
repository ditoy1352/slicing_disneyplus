import styles from './index.module.css';
interface props {
    title: string,
    paragraft: string,
    poster: string,
    banner: string,
    onClick?: () => void
}
const ContentCard = (props: props) => { 
    const {title, paragraft, poster, banner, onClick} = props;
    return (
        <div className={styles.cardContainer} onClick={onClick}>
            <div className={styles.content}>
                <div className={styles.poster}>
                    <img src={poster}
                        alt=""
                        width="100%"
                        
                    />
                </div>
            </div>

            <div className={styles.detail}>
                <div className={styles.bannerWrapper}>
                    <img src={banner}
                    />
                </div>
                <div className={styles.detailWrapper}>
                    <h3>{title}</h3>
                    <p>{paragraft}</p>
                </div>
            </div>
        </div>


    );
}

export default ContentCard;