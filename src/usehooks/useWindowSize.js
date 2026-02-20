import { useWindowSize } from "@uidotdev/usehooks";

const useWindowSizeCheck = () => {
    const { width } = useWindowSize()
    const isMobile = width <= 768;
    const stackedCard =  width < 1024;
    const isSmallMobile = width <= 430


    return { 
        isMobile,
        stackedCard,
        isSmallMobile
    }
}

export default useWindowSizeCheck