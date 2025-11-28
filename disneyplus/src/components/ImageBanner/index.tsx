import styles from './index.module.css'

interface props {
    src: string,
    alt?: string
}
const ImageBanner = (props: props) => {
    return (
        <div className={styles.container}>
            <img 
            height="100%" 
            src={props.src} 
            alt={props.alt} />
        </div>
    )
}

export default ImageBanner;