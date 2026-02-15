import { useState, useEffect, useContext } from 'react';
import useWindowSizeCheck from '../usehooks/useWindowSize';
import ActiveSectionContext from '../context/activeSectionContext';
import { House } from 'lucide-react';
import { SquareUser } from 'lucide-react';
import { Code } from 'lucide-react';
import { Layers } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Menu } from 'lucide-react';
import { motion } from "framer-motion";

const Header = ({handleScrollToSection}) => {
    const isMobile = useWindowSizeCheck()
    const { activeSection } = useContext(ActiveSectionContext)
    const [ isHamburgerMenuOpen, setIsHamburgerMenuOpen ] = useState(false)
    const [ hasAnimeted, setHasAnimated ] = useState(false)

    useEffect(() => {
        console.log(activeSection)
    }, [activeSection])

    useEffect(() => {
        setHasAnimated(true)
    }, [])
    
    useEffect(() => {
        if(!isMobile){
            setIsHamburgerMenuOpen(false)
        }
    }, [isMobile])

    const NavContent = () => {
        return(
            <nav 
                className={`h-auto p-1 
                    ${isHamburgerMenuOpen 
                        ? "absolute top-full -mt-2 right-1 bg-black border-2 border-Mcolor w-[9.50rem] z-10 rounded-md" 
                        : "w-auto "}
                `}>
                <ul 
                    className={`flex items-center justify-center w-auto h-auto p-2
                        ${isHamburgerMenuOpen ? "flex-col gap-2" : "gap-6"}
                    `}
                >
                    <motion.li
                        initial={(hasAnimeted && !isMobile) ? { scale: 0.9, opacity: 0 } : false}
                        animate={{ opacity: 1, scale: 1}}
                        transition={{ 
                            duration: 0.4, 
                            delay: 0.4, 
                            ease: "easeIn" 
                        }}
                        onAnimationComplete={() => setHasAnimated(false)}
                        onClick={() => handleScrollToSection("home")}
                        className={`flex items-center cursor-pointer p-2 border border-transparent
                            ${activeSection === "home"
                                ? "border-white text-orange-500 font-semibold rounded-md"
                                : "hoverable:hover:border-orange-500 transition-all duration-300 rounded-md"
                            }    
                        `}
                    >
                        <House size={22} color="#EA5A0B"/>
                        <span className="ml-2 text-Mcolor font-Htext font-semibold text-[clamp(0.90rem,1.5vw,1.05rem)]">
                            Home
                        </span>
                    </motion.li>
                    <motion.li
                        initial={(hasAnimeted && !isMobile) ? { scale: 0.9, opacity: 0 } : false}
                        animate={{ opacity: 1, scale: 1}}
                        transition={{ 
                            duration: 0.4, 
                            delay: 0.4, 
                            ease: "easeIn" 
                        }}
                        onAnimationComplete={() => setHasAnimated(false)}
                        onClick={() => handleScrollToSection("about")}
                        className={`flex items-center cursor-pointer p-2 border border-transparent
                            ${activeSection === "about"
                                ? "border-white text-orange-500 font-semibold rounded-md"
                                : "hoverable:hover:border-orange-500 transition-all duration-300 rounded-md"
                            }    
                        `}
                    >
                        <SquareUser size={22} color="#EA5A0B"/>
                        <span className="ml-2 text-Mcolor font-Htext font-semibold text-[clamp(0.90rem,1.5vw,1.05rem)]">
                            About
                        </span>
                    </motion.li>
                    <motion.li 
                        initial={(hasAnimeted && !isMobile) ? { scale: 0.9, opacity: 0 } : false}
                        animate={{ opacity: 1, scale: 1}}
                        transition={{ 
                            duration: 0.4, 
                            delay: 0.4, 
                            ease: "easeIn" 
                        }}
                        onAnimationComplete={() => setHasAnimated(false)}
                        onClick={() => handleScrollToSection("projects")}
                        className={`flex items-center cursor-pointer p-2 border border-transparent
                            ${activeSection === "projects"
                                ? "border-white text-orange-500 font-semibold rounded-md"
                                : "hoverable:hover:border-orange-500 transition-all duration-300 rounded-md"
                            }    
                        `}
                    >
                        <Code size={22} color="#EA5A0B"/>
                        <span className="ml-2 text-Mcolor font-Htext font-semibold text-[clamp(0.90rem,1.5vw,1.05rem)]">
                            Projects
                        </span>
                    </motion.li>
                    <motion.li 
                        initial={(hasAnimeted && !isMobile) ? { scale: 0.9, opacity: 0 } : false}
                        animate={{ opacity: 1, scale: 1}}
                        transition={{ 
                            duration: 0.4, 
                            delay: 0.4, 
                            ease: "easeIn" 
                        }}
                        onAnimationComplete={() => setHasAnimated(false)}
                        onClick={() => handleScrollToSection("techstack")}
                        className={`flex items-center cursor-pointer p-2 border border-transparent
                            ${activeSection === "techstack"
                                ? "border-white text-orange-500 font-semibold rounded-md"
                                : "hoverable:hover:border-orange-500 transition-all duration-300 rounded-md"
                            }    
                        `}
                    >
                        <Layers size={22} color="#EA5A0B"/>
                        <span className="ml-2 text-Mcolor font-Htext font-semibold text-[clamp(0.90rem,1.5vw,1.05rem)]">
                            Tech Stack
                        </span>
                    </motion.li>
                    <motion.li 
                        initial={(hasAnimeted && !isMobile) ? { scale: 0.9, opacity: 0 } : false}
                        animate={{ opacity: 1, scale: 1}}
                        transition={{ 
                            duration: 0.4, 
                            delay: 0.4, 
                            ease: "easeIn"  
                        }}
                        onClick={() => handleScrollToSection("contact")}
                        className={`flex items-center cursor-pointer p-2 border border-transparent
                            ${activeSection === "contact"
                                ? "border-white text-orange-500 font-semibold rounded-md"
                                : "hoverable:hover:border-orange-500 transition-all duration-300 rounded-md"
                            }    
                        `}
                    >
                        <Phone size={22} color="#EA5A0B"/>
                        <span className="ml-2 text-Mcolor font-Htext font-semibold text-[clamp(0.90rem,1.5vw,1.05rem)]">
                            Contact
                        </span>
                    </motion.li>
                </ul>
            </nav>
        )
    }

    return(
        <header className={`fixed top-0 flex items-center w-full h-[4.50rem] p-1 z-50 bg-black border-b-2 border-white
            ${isMobile ? "justify-end" : "justify-center"}
        `}>
            {isMobile
                ? (
                    <>
                        <button
                            type="button"
                            onClick={() => setIsHamburgerMenuOpen(prev => !prev)}
                            className="border border-transparent p-2 hoverable:hover:border-orange-500 transition-all duration-300 rounded mr-2"
                        >
                            <Menu size={30} color="#EA5A0B"/>
                        </button>
                        {isHamburgerMenuOpen && (
                            <NavContent/>
                        )}
                    </>
                )
                : (
                    <NavContent/>
                )
            }
        </header>
    )
}

export default Header