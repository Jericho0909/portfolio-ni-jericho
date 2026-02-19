import { useWindowSize } from "@uidotdev/usehooks";

const useWindowSizeCheck = () => {
    const { width } = useWindowSize()
    const isMobile = width <= 768;
    const stackedCard =  width < 1024;


    return { 
        isMobile,
        stackedCard
    }
}

export default useWindowSizeCheck