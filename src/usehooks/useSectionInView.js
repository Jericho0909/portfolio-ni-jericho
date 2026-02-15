 import { useIntersectionObserver } from "@uidotdev/usehooks";
 
const useSectionInView = () => {
    const [ ref, entry ] = useIntersectionObserver({
        threshold: 0.5,
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