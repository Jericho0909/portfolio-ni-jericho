import { useState, useContext, useEffect } from "react"
import WindowSizeContext from "../context/windowSizeContext"
import ModalContext from "../context/modalContext"
import Header from "../components/header"
import Main from "../components/main"
import Footer from "../components/footer"
import Modal from "../components/modal"
import { AnimatePresence } from "framer-motion"
const PortfolioPage = () => {
    const { isOpen } = useContext(ModalContext)
    const { isSmallMobile } = useContext(WindowSizeContext)
    const [ selectedProject, setSelectedProject ] = useState({})
    const [ isDelay, setIsDelay ] = useState(true)

    const handleScrollToSection = (id) => {
        const sectionId = document.getElementById(id)
        if(sectionId){
            sectionId.scrollIntoView({behavior: 'smooth', block: isSmallMobile ? 'start' : 'center'})
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

            <Header
                handleScrollToSection={handleScrollToSection}
            />
            <AnimatePresence mode="wait">
                {isOpen && (
                    <Modal
                        selectedProject={selectedProject}
                        setSelectedProject={setSelectedProject}
                    />
                )}
            </AnimatePresence>
            <Main
                setSelectedProject={setSelectedProject}
            />
            <Footer/>
        </>
    )
}

export default PortfolioPage