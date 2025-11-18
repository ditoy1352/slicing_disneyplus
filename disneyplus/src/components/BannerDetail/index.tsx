import styles from './index.module.css'
const BannerDetail = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.description}>
                    Description text goes here. This is a placeholder for the banner detail description.
                </p>
                <div className={styles.buttons}>
                    <button className={styles.playButton}>
                        <span className="material-symbols-outlined">play_arrow</span>
                        Play
                    </button>
                    <button className={styles.infoButton}>
                        <span className="material-symbols-outlined">info</span>
                        More Info
                    </button>
                </div>
            </div>
        </div>
    )
}
export default BannerDetail;