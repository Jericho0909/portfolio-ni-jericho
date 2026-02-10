import Home from "./section/home"
import About from "./section/about"
import Projects from "./section/projects"
import TechStack from "./section/techstack"
import Contact from "./section/contact"
const Main = () => {
    return (
        <main
            className="mt-[4.50rem] w-full h-auto p-1"
        >
            <Home/>
            <About/>
            <Projects/>
            <TechStack/>
            <Contact/>
        </main>
    )
}

export default Main