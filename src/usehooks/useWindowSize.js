import { useWindowSize } from "@uidotdev/usehooks";

const useWindowSizeCheck = () => {
    const { width } = useWindowSize()
    const isMobile = width < 768;

    return isMobile
}

export default useWindowSizeCheck