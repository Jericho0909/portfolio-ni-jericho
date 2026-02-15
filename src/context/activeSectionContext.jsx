import { createContext, useState } from "react";

const ActiveSectionContext = createContext();

export const ActiveSectionProvider = ({ children }) => {
    const [activeSection, setActiveSection] = useState("home");

    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                setActiveSection
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    );
};

export default ActiveSectionContext;
