import { useIntersectionObserver } from "@uidotdev/usehooks";
 
const useSectionInView = ({h = 0}) => {
    const [ ref, entry ] = useIntersectionObserver({
        threshold: h,
        root: null,
        rootMargin: "0px",
    })

    const isVisible = entry?.isIntersecting

    return {
        ref,
        isVisible
    }
}

export default useSectionInView