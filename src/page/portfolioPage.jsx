import { useState, useContext, useEffect } from "react"
import WindowSizeContext from "../context/windowSizeContext"
import Header from "../components/header"
import Main from "../components/main"
import Footer from "../components/footer"
import { AnimatePresence } from "framer-motion"
import { Toaster } from "react-hot-toast";
const PortfolioPage = () => {
    const { isSmallMobile } = useContext(WindowSizeContext)
    const [ selectedProject, setSelectedProject ] = useState({})
    const [ isDelay, setIsDelay ] = useState(true)

    const handleScrollToSection = (id) => {
        const sectionId = document.getElementById(id)
        if(sectionId){
            sectionId.scrollIntoView({behavior: 'smooth', block: isSmallMobile ? 'start' : 'start'})
        }
        else{
            return
        }

    }

    useEffect(() => {
        if (isDelay) {
            const timer = setTimeout(() => {
                setIsDelay(false)
            }, 200)

            return () => clearTimeout(timer)
        }
    }, [isDelay])

    if(isDelay) return

    return(
        <>  
            <Toaster position="bottom-center" reverseOrder={false} />
            <Header
                handleScrollToSection={handleScrollToSection}
            />
            <Main
                setSelectedProject={setSelectedProject}
            />
            <Footer/>
        </>
    )
}

export default PortfolioPage