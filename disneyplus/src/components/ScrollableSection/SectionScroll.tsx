import type { PropsWithChildren } from "react"
import { SwiperSlide } from "swiper/react"
const SectionScroll = (props: PropsWithChildren<unknown>) => {
    const {children} = props
    return (
        <SwiperSlide>
            {children}
        </SwiperSlide>
    )
}

SectionScroll.displayName = "SwiperSlide"

export default SectionScroll