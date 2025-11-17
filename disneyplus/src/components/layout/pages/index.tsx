import { PropsWithChildren } from "react"
import styles from './index.module.css';


const Page = (props: PropsWithChildren<unknown>) => {
    const {Children} = props;
    return (
        <div className={styles.container}>{Children}</div>
    )
}

export default Page