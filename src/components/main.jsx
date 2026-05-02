import { useContext } from "react"
import WindowSizeContext from "../context/windowSizeContext"
import Home from "./section/home"
import About from "./section/about"
import Projects from "./section/projects"
import TechStack from "./section/techstack"
import Contact from "./section/contact"
import GrowthTimeLine from "./growthTime"
const Main = ({setSelectedProject}) => {
    const { isSmallMobile } = useContext(WindowSizeContext)
    return (
        <main
            className="mt-[4.50rem] w-full h-auto p-1"
        >
            <Home/>
            <div className={`w-full h-[58svh] ${isSmallMobile && "h-[28svh]" }`}></div>
            <About>
                <GrowthTimeLine />
            </About>
            <div className={`w-full h-[58svh] ${isSmallMobile && "h-[28svh]" }`}></div>
            <Projects
                setSelectedProject={setSelectedProject}
            />
            <div className={`w-full h-[58svh] ${isSmallMobile && "h-[28svh]" }`}></div>
            <TechStack/>
            <div className={`w-full h-[58svh] ${isSmallMobile && "h-[28svh]" }`}></div>
            <Contact/>
        </main>
    )
}

export default Main