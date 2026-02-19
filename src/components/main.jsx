import Home from "./section/home"
import About from "./section/about"
import Projects from "./section/projects"
import TechStack from "./section/techstack"
import Contact from "./section/contact"
const Main = ({setSelectedProject}) => {
    return (
        <main
            className="mt-[4.50rem] w-full h-auto p-1"
        >
            <Home/>
            <div className="w-full h-[20svh]"></div>
            <About/>
            <div className="w-full h-[20svh]"></div>
            <Projects
                setSelectedProject={setSelectedProject}
            />
            <div className="w-full h-[20svh]"></div>
            <TechStack/>
            <div className="w-full h-[20svh]"></div>
            <Contact/>
        </main>
    )
}

export default Main