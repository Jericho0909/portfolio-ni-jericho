import { useState, useEffect, useContext } from "react"
import ActiveSectionContext from "../../context/activeSectionContext"
import useSectionInView from "../../usehooks/useSectionInView"
import { motion } from "framer-motion"

const Contact = () => {
    const { ref, isVisible } = useSectionInView()
    const { setActiveSection } = useContext(ActiveSectionContext)
    const [ hasAnimeted, setHasAnimeted ] = useState(false)

    useEffect(() => {
        if(isVisible){
            setHasAnimeted(true)
            setActiveSection("contact")
        }
    }, [isVisible])
    return(
        <motion.section 
            ref={ref}
            id="contact"
            className="w-full h-[80svh] p-1 border border-white mb-4"
        >
            Contact
        </motion.section>
    )
}

export default Contact