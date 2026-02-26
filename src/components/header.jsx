import { useState, useEffect, useContext, useRef } from 'react';
import ActiveSectionContext from '../context/activeSectionContext';
import WindowSizeContext from '../context/windowSizeContext';
import ClickAnyWhere from '../utils/clickAnywhere';
import { House } from 'lucide-react';
import { SquareUser } from 'lucide-react';
import { Code } from 'lucide-react';
import { Layers } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Menu } from 'lucide-react';
import { motion } from "framer-motion";

const Header = ({handleScrollToSection}) => {
    const { activeSection } = useContext(ActiveSectionContext)
    const { isMobile } = useContext(WindowSizeContext)
    const [ isHamburgerMenuOpen, setIsHamburgerMenuOpen ] = useState(false)
    const hamburgerRef = useRef(null)
    
    useEffect(() => {
        if(!isMobile){
            setIsHamburgerMenuOpen(false)
        }
    }, [isMobile])

    useEffect(() => {
        if(isMobile){
            ClickAnyWhere(hamburgerRef, setIsHamburgerMenuOpen)
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
                    <li
                        onClick={() => {
                            handleScrollToSection("home")
                            setIsHamburgerMenuOpen(false)
                        }}
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
                    </li>
                    <li
                        onClick={() => {
                            handleScrollToSection("about")
                            setIsHamburgerMenuOpen(false)
                        }}
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
                    </li>
                    <li 
                        onClick={() => {
                            handleScrollToSection("projects")
                            setIsHamburgerMenuOpen(false)
                        }}
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
                    </li>
                    <li 
                        onClick={() => {
                            handleScrollToSection("techstack")
                            setIsHamburgerMenuOpen(false)
                        }}
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
                    </li>
                    <li 
                        initial={{ scale: !isMobile ? 0.9 : 1, opacity: !isMobile ? 0 : 1 }}
                        animate={{ opacity: 1, scale: 1}}
                        transition={{ 
                            duration: 0.4, 
                            delay: 0.4, 
                            ease: "easeIn"  
                        }}
                        onClick={() => {
                            handleScrollToSection("contact")
                            setIsHamburgerMenuOpen(false)
                        }}
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
                    </li>
                </ul>
            </nav>
        )
    }

    return(
        <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className={`fixed top-0 flex items-center w-full h-[4.50rem] p-1 z-50 bg-black border-b-2 border-white
            ${isMobile ? "justify-end" : "justify-center"}`}
        >
            {isMobile
                ? (
                    <>
                        <div 
                            ref={hamburgerRef}
                            className="w-auto h-auto p-1"
                        >
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
                        </div>
                    </>
                )
                : (
                    <NavContent/>
                )
            }
        </motion.header>
    )
}

export default Header