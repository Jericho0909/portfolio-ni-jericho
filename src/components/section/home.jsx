import { useState, useEffect, useContext } from "react"
import ActiveSectionContext from "../../context/activeSectionContext"
import useSectionInView from "../../usehooks/useSectionInView"
import Jericho from "../../assets/img/jericho.webp"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { Rocket } from 'lucide-react';
import { MessageCircleMore } from 'lucide-react';
const Home = () => {
    const { ref, isVisible } = useSectionInView()
    const { setActiveSection } = useContext(ActiveSectionContext)
    const [ hasAnimeted, setHasAnimeted ] = useState(false)

    useEffect(() => {
        if(isVisible){
            setHasAnimeted(true)
            setActiveSection("home")
        }
    }, [isVisible])

    return(
        <section 
            ref={ref}
            id="home"
            className=" relative flex items-center justify-center flex-col-reverse lg:flex-row  w-full h-[92svh] p-1 mb-4"
        >
            <div className="flex items-start justify-center flex-col h-full ml-0 lg:ml-20 p-1 space-y-6 cursor-default">

                <motion.h1 
                    initial={{ x: -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                        duration: 0.8, 
                        delay: 0.2, 
                        ease: "easeIn" 
                    }}
                    className="text-Mcolor font-Htext font-bold text-[clamp(3rem,5vw,8rem)] leading-tight">
                    Hi, I'm
                    <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent pl-6 drop-shadow-[0_0_8px_rgba(255,165,0,0.35)]">
                        Jericho Zara
                    </span>
                </motion.h1>

                <motion.span
                    initial={{ x: -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                        duration: 0.8, 
                        delay: 0.4, 
                        ease: "easeIn" 
                    }}
                    className="flex items-center gap-3 text-white font-Htext font-medium text-[clamp(0.95rem,2vw,1.50rem)]"
                >
                    <span>
                        React Frontend Developer
                    </span>
                    <FontAwesomeIcon 
                        icon={faReact} 
                        className="text-3xl text-[#EA5A0B]"
                    />
                </motion.span>

                <motion.p 
                    initial={{ x: -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                        duration: 0.8, 
                        delay: 0.6, 
                        ease: "easeIn" 
                    }}
                    className="text-gray-400 font-Htext font-medium text-[clamp(0.90rem,1.5vw,1.05rem)]"
                >
                    Building interactive, responsive, and modern web applications.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 0.8, 
                        delay: 0.8, 
                        ease: "easeIn" 
                    }}
                    className="flex  justify-center lg:justify-start gap-8 pt-4 w-full"
                >

                    <button
                        onClick={() => {
                            document.getElementById('projects')
                            .scrollIntoView({ behavior: 'smooth', block: 'center' })
                        }}
                        className="flex items-center px-6 py-3 gap-2 text-base text-white border-x-2 border-Mcolor rounded-md transition-transform duration-300 hover:scale-105 focus:outline-none"
                    >
                        <span>
                            See My Work
                        </span>
                        <Rocket
                            size={18}
                            color={"#EA5A0B"}
                        />

                    </button>

                    <button
                        onClick={() => {
                            document.getElementById('contact')
                            .scrollIntoView({ behavior: 'smooth', block: 'center' })
                        }}
                        className="flex items-center px-6 py-3 gap-2 text-base text-white border-x-2  border-Mcolor rounded-md transition-transform duration-300 hover:scale-105 focus:outline-none"
                    >
                        <span>
                            Let's Talk
                        </span>
                        <MessageCircleMore
                            size={18}
                            color={"#EA5A0B"}
                        />
                    </button>

                </motion.div>
            </div>

            <motion.div
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ 
                    duration: 0.8, 
                    delay: 0.2, 
                    ease: "easeIn" 
                }}
                className="flex items-start justify-end flex-1 h-full"
            >
                <div className="flex items-center justify-center relative w-[17rem] h-[17rem] mt-10 lg:mt-16 lg:mr-20 group perspective-1000">
                    <div className="absolute inset-[-20%] rounded-full bg-gradient-to-r from-orange-400/50 via-orange-500/40 to-yellow-400/30 opacity-70 blur-3xl animate-pulse"></div>

                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-400/20 via-orange-500/15 to-yellow-300/10 blur-xl"></div>

                    <div className="relative bg-black/80 backdrop-blur-sm p-[3px] rounded-full overflow-hidden shadow-[0_0_50px_rgba(255,165,0,0.3)]">
                        <img 
                            src={Jericho} 
                            alt="Jericho" 
                            loading="lazy" 
                            className="w-[11rem] h-[11rem] object-cover rounded-full"
                        />
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
                onClick={() => {
                    document.getElementById('projects')
                    .scrollIntoView({ behavior: 'smooth' })
                }}
            >
                <div className="w-6 h-10 border-2 border-Mcolor rounded-full flex justify-center">
                    <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-2 h-2 bg-Mcolor rounded-full mt-2"
                    />
                </div>
            </motion.div>
        </section>
    )
}

export default Home