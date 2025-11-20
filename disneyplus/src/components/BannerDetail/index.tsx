import clsx from 'clsx';
import styles from './index.module.css'
const BannerDetail = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Title</h1>
                <div className={clsx(styles.section, styles.section1)}>
                   <span>2023</span>
                    <i>&#x2022;</i>
                    <span>English</span>
                </div>
                 <div className={clsx(styles.section, styles.section2)}>
                    <p>Text overview section</p>
                </div>
                 <div className={clsx(styles.section, styles.section3)}>
                    {['Romance', 'comedy'].map((genres, index) => (
                        <>  
                         {index > 0 && <span>&#124;</span>}
                        <b key={genres} className={styles.genreItem}>{genres}</b>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default BannerDetail;