import { House } from 'lucide-react';
import { SquareUser } from 'lucide-react';
import { Code } from 'lucide-react';
import { Layers } from 'lucide-react';
import { Phone } from 'lucide-react';
import { motion } from "framer-motion";

const Header = ({handleScrollToSection}) => {
    return(
        <header className="fixed top-0 flex items-center justify-center w-full h-auto p-1 z-50 bg-black border-b border-white">
            <nav className="w-full h-auto">
                <ul className="flex items-center justify-center w-auto h-auto gap-6 p-2">
                    <motion.li
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{  opacity: 1, scale: 1}}
                        transition={{ 
                            duration: 0.4, 
                            delay: 0.4, 
                            ease: "easeIn" 
                        }}
                        onClick={() => handleScrollToSection("home")}
                        className="flex items-center cursor-pointer p-2 border border-transparent hover:border-orange-500 transition-all duration-300 rounded"
                    >
                        <House size={22} color="#EA5A0B"/>
                        <span className="ml-2 text-Mcolor font-Htext font-semibold text-base">
                            Home
                        </span>
                    </motion.li>
                    <motion.li
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{  opacity: 1, scale: 1}}
                        transition={{ 
                            duration: 0.4, 
                            delay: 0.4, 
                            ease: "easeIn" 
                        }}
                        onClick={() => handleScrollToSection("about")}
                        className="flex items-center cursor-pointer p-2 border border-transparent hover:border-orange-500 transition-all duration-300 rounded"
                    >
                        <SquareUser size={22} color="#EA5A0B"/>
                        <span className="ml-2 text-Mcolor font-Htext font-semibold text-base">
                            About
                        </span>
                    </motion.li>
                    <motion.li 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{  opacity: 1, scale: 1}}
                        transition={{ 
                            duration: 0.4, 
                            delay: 0.4, 
                            ease: "easeIn" 
                        }}
                        onClick={() => handleScrollToSection("projects")}
                        className="flex items-center cursor-pointer p-2 border border-transparent hover:border-orange-500 transition-all duration-300 rounded"
                    >
                        <Code size={22} color="#EA5A0B"/>
                        <span className="ml-2 text-Mcolor font-Htext font-semibold text-base">
                            Projects
                        </span>
                    </motion.li>
                    <motion.li 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{  opacity: 1, scale: 1}}
                        transition={{ 
                            duration: 0.4, 
                            delay: 0.4, 
                            ease: "easeIn" 
                        }}
                        onClick={() => handleScrollToSection("techstack")}
                        className="flex items-center cursor-pointer p-2 border border-transparent hover:border-orange-500 transition-all duration-300 rounded"
                    >
                        <Layers size={22} color="#EA5A0B"/>
                        <span className="ml-2 text-Mcolor font-Htext font-semibold text-base">
                            Tech Stack
                        </span>
                    </motion.li>
                    <motion.li 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{  opacity: 1, scale: 1}}
                        transition={{ 
                            duration: 0.4, 
                            delay: 0.4, 
                            ease: "easeIn"  
                        }}
                        onClick={() => handleScrollToSection("contact")}
                        className="flex items-center cursor-pointer p-2 border border-transparent hover:border-orange-500 transition-all duration-300 rounded"
                    >
                        <Phone size={22} color="#EA5A0B"/>
                        <span className="ml-2 text-Mcolor font-Htext font-semibold text-base">
                            Contact
                        </span>
                    </motion.li>
                </ul>
            </nav>

        </header>
    )
}

export default Header