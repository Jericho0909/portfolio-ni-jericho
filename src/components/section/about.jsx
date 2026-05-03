import { useEffect, useContext, useState } from "react"
import WindowSizeContext from "../../context/windowSizeContext"
import ActiveSectionContext from "../../context/activeSectionContext"
import useSectionInView from "../../usehooks/useSectionInView"
import { motion, AnimatePresence } from "framer-motion"
import CodeImg from "../../assets/img/code.webp"
import { ArrowDown } from 'lucide-react';
const About = ({ children }) => {
    const { ref, isVisible } = useSectionInView({h:0.2})
    const { stackedCard, isSmallMobile } = useContext(WindowSizeContext)
    const { setActiveSection } = useContext(ActiveSectionContext)
    const [ isShow, setIsShow ] = useState(false)

    useEffect(() => {
        if(isVisible){
            setActiveSection("about")
        }
    }, [isVisible])

    const toTop = () => {
        const timeLineEl = document.getElementById("timeLine")
        if(!isShow){
            timeLineEl.scrollIntoView({behavior: 'instant', block: 'start'})
        }
    }

    return(
        <section
            ref={ref}
            id="about"
            className={`w-full h-auto p-1 mb-4 gap-4 scroll-mt-20 sm:scroll-mt-32 ${stackedCard ? "grid grid-cols-1" : "grid grid-cols-2"}  ${isSmallMobile && "scroll-mt-[13.50rem]"}`}
        >
            <motion.div 
                
                className={`flex items-start flex-col w-full bg-white/5 backdrop-blur-md rounded-xl border border-white/10
                    ${stackedCard ? "h-auto" : "p-3 sticky top-36  h-[76svh]"}
                `}
            >
                <h1 className="flex justify-start w-full text-white font-Htext font-medium text-[clamp(0.95rem,2vw,1.50rem)] border-b border-white p-3 mb-2">
                    ABOUT
                </h1>
                <div className="flex items-start justify-center flex-col w-full p-2 gap-2 cursor-default mb-2">
                    <div className="relative w-full h-[13rem] sm:h-[12rem]  overflow-hidden mb-2">
                        <div className="flex justify-center absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none z-10">
                            <img
                                src={CodeImg}
                                alt="Coding setup preview"
                                loading="lazy"
                                className="w-full sm:w-[50%] h-full object-fill rounded-xl"
                            />   
                        </div>
                    </div>
                    <div className="flex items-center flex-col p-1">
                        <div className="mb-4 w-full sm:w-[70%]">
                            <h2 className="text-gray-400 font-Htext italic mb-2 font-medium text-[clamp(0.90rem,1.5vw,1rem)]">
                                While others focus on how things look, I focus on how they feel.
                            </h2>

                            <p className="text-gray-400 font-Ptext font-medium text-[clamp(0.80rem,1.5vw,0.90rem)]">
                                I'm a React Developer who prioritizes UX design — building websites that are smooth, accessible, and effortless to navigate, whether on desktop or mobile.
                            </p>
                        </div>

                        <ul className="flex flex-col gap-3 p-4 text-gray-400 font-Ptext font-medium text-[clamp(0.80rem,1.5vw,0.90rem)] border border-white rounded-md">
                            <li className="flex items-center gap-2">
                                <span className="text-green-400 font-bold">✔</span>
                                Responsive Web Design — works on any device
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-400 font-bold">✔</span>
                                UX-Focused Flow — effortless navigation
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-400 font-bold">✔</span>
                                Clean Component Structure — maintainable code
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-400 font-bold">✔</span>
                                AI-Assisted Development - leverages AI tools to improve productivity and problem-solving 
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>
            {stackedCard
                ? (
                    <motion.div
                        id="timeLine"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ 
                            duration: 0.8, 
                            delay: 0.3, 
                            ease: "easeIn" 
                        }}
                        className="scroll-mt-56  w-full h-auto"
                    >   
                        {isShow && (
                            <div
                                className="w-full p-1 overflow-hidden"
                            >
                                {children}
                            </div>
                        )}
                        <div 
                            className="flex items-center justify-center w-full h-auto p-3 relative"
                        >
                            <div className="absolute translate-y-1/2 w-full h-[0.10rem] rounded bg-white z-10">

                            </div>
                            <button 
                                type="button"
                                onClick={() => {
                                    setIsShow(prev => !prev)
                                    toTop()
                                }}
                                className="flex items-center justify-center w-[4rem] h-[4rem] rounded-full bg-white relative z-20 p-1"
                            >
                                <ArrowDown 
                                    size={28} 
                                    color="#EA5A0B"
                                    className={`transition-transform duration-300 ${isShow ? "-rotate-180" : "rotate-0"}`}
                                />
                            </button>
                        </div>
                    </motion.div>
                )
                : (
                    children
                )
            }
        </section>
    )
}

export default About