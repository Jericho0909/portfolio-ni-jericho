import { createContext } from "react";
import useWindowSizeCheck from "../usehooks/useWindowSize";

const WindowSizeContext = createContext()

export const WindowSizeProvider = ({children}) => {
    const { isMobile, stackedCard } = useWindowSizeCheck()

    return(
        <WindowSizeContext.Provider
            value={{
                isMobile,
                stackedCard
            }}
        >
            {children}
        </WindowSizeContext.Provider>
    )
}

export default WindowSizeContext