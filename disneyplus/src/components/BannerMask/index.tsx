import type { PropsWithChildren } from 'react';
import Styles from './index.module.css'
 const BannerMask = (props:PropsWithChildren<unknown>) => {
    const {children} = props

    return (
        <div className={Styles.container}>
            <div className={Styles.topMask}></div>
            <div className={Styles.bottomMask}>
                {children}
            </div>
        </div>
    )
}

export default BannerMask;