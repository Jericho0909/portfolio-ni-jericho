import { useContext } from "react"
import WindowSizeContext from "../context/windowSizeContext"
import Home from "./section/home"
import About from "./section/about"
import Projects from "./section/projects"
import TechStack from "./section/techstack"
import Contact from "./section/contact"
const Main = ({setSelectedProject}) => {
    const { isSmallMobile } = useContext(WindowSizeContext)
    return (
        <main
            className="mt-[4.50rem] w-full h-auto p-1"
        >
            <Home/>
            <div className={`w-full h-[13svh] ${isSmallMobile && "h-[30svh]" }`}></div>
            <About/>
            <div className={`w-full h-[13svh] ${isSmallMobile && "h-[5svh]" }`}></div>
            <Projects
                setSelectedProject={setSelectedProject}
            />
            <div className={`w-full h-[13svh] ${isSmallMobile && "h-[5svh]" }`}></div>
            <TechStack/>
            <div className={`w-full h-[13svh] ${isSmallMobile && "h-[5svh]" }`}></div>
            <Contact/>
        </main>
    )
}

export default Main