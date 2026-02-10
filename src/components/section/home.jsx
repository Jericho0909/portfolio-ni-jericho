import { useState, useEffect } from "react"
import useSectionInView from "../../usehooks/useSectionInView"
import { motion } from "framer-motion"
const Home = () => {
    const { ref, isVisible } = useSectionInView()
    const [ isAnimeted, setIsAnimeted ] = useState(false)

    useEffect(() => {
        if(isVisible){
            setIsAnimeted(true)
        }
    }, [isVisible])

    return(
        <motion.section 
            ref={ref}
            id="home"
            className="w-full h-[80svh] p-1 border border-white mb-4"
        >
            Home
        </motion.section>
    )
}

export default Home