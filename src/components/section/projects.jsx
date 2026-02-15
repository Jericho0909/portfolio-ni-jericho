import { useState, useEffect, useContext } from "react"
import ActiveSectionContext from "../../context/activeSectionContext"
import useSectionInView from "../../usehooks/useSectionInView"
import { motion } from "framer-motion"

const Projects = () => {
    const { ref, isVisible } = useSectionInView()
    const { setActiveSection } = useContext(ActiveSectionContext)
    const [ hasAnimeted, setHasAnimeted ] = useState(false)

    useEffect(() => {
        if(isVisible){
            setHasAnimeted(true)
            setActiveSection("projects")
        }
    }, [isVisible])

    return(
        <motion.section 
            ref={ref}
            id="projects"
            className="w-full h-[100svh] p-1 border border-white mb-4"
        >
            Projects
        </motion.section>
    )
}

export default Projects