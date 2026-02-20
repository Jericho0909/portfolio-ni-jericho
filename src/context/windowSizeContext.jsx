import { createContext } from "react";
import useWindowSizeCheck from "../usehooks/useWindowSize";

const WindowSizeContext = createContext()

export const WindowSizeProvider = ({children}) => {
    const { isMobile, stackedCard, isSmallMobile } = useWindowSizeCheck()

    return(
        <WindowSizeContext.Provider
            value={{
                isMobile,
                stackedCard,
                isSmallMobile
            }}
        >
            {children}
        </WindowSizeContext.Provider>
    )
}

export default WindowSizeContext