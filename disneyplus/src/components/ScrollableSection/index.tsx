// ScrollableSection/index.tsx
import type { PropsWithChildren } from 'react';
import styles from './index.module.css';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
interface props {
    title: string;
}

const ScrollableSection = (props: PropsWithChildren<props>) => {
    const {title, children} = props;

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <Swiper 
                modules={[Navigation, Pagination]}
                slidesPerView={5}
                navigation
                breakpoints={{
                    320: { slidesPerView: 2, spaceBetween: 10 },
                    640: { slidesPerView: 3, spaceBetween: 12 },
                    1024: { slidesPerView: 4, spaceBetween: 14 },
                    1280: { slidesPerView: 5, spaceBetween: 16 },
                    1536: { slidesPerView: 6, spaceBetween: 18 }
                }}
                className={styles.swiper}
            > 
                {children}  
            </Swiper>
        </div>
    )
}

export default ScrollableSection;