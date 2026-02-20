import { useEffect, useContext } from "react"
import WindowSizeContext from "../../context/windowSizeContext"
import ActiveSectionContext from "../../context/activeSectionContext"
import useSectionInView from "../../usehooks/useSectionInView"
import { motion } from "framer-motion"
import CodeImg from "../../assets/img/code.webp"
const About = () => {
    const { ref, isVisible } = useSectionInView()
    const { isSmallMobile } = useContext(WindowSizeContext)
    const { setActiveSection } = useContext(ActiveSectionContext)

    useEffect(() => {
        if(isVisible){

            setActiveSection("about")
        }
    }, [isVisible])


    return(
        <section
            ref={ref}
            id="about"
            className={`flex items-center justify-center w-full h-[80svh] p-1 mb-4 scroll-mt-20 sm:scroll-mt-32 ${isSmallMobile && "scroll-mt-56"}`}
        >
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                    duration: 0.8, 
                    delay: 0.3, 
                    ease: "easeIn" 
                }}
                className="flex items-center justify-around flex-col w-full sm:w-[85%] lg:w-[70%] xl:w-[55%] h-auto p-3 border border-white"
            >
                <h1 className="flex justify-start w-full text-white font-Htext font-medium text-[clamp(0.95rem,2vw,1.50rem)] border-b border-white p-3 mb-2">
                    ABOUT ME
                </h1>
                <div className="flex items-start justify-center flex-col sm:flex-row w-full p-2 gap-5 cursor-default mb-2">
                    <div className="relative w-full lg:w-[25rem] h-[13rem] sm:h-[12rem] rounded-xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,150,255,0.15)]">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none z-10">
                            <img
                                src={CodeImg}
                                alt="Coding setup preview"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex items-center flex-col p-1">
                        <div className="mb-6 lg:mb-8">
                            <h2 className="text-gray-400 font-Htext italic mb-4 font-medium text-[clamp(0.90rem,1.5vw,1.05rem)]">
                                While others focus on how things look, I focus on how they feel.
                            </h2>

                            <p className="text-gray-400 font-Ptext font-medium text-[clamp(0.85rem,1.5vw,1rem)]">
                                I'm a React Developer who prioritizes UX design — building websites that are smooth, accessible, and effortless to navigate, whether on desktop or mobile.
                            </p>
                        </div>

                        <ul className="flex  flex-col gap-3 p-4 text-gray-400 font-Ptext font-medium text-[clamp(0.85rem,1.5vw,1rem)] border border-white rounded-md">
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
                            <li className="flex items-center gap-2">
                                <span className="text-green-400 font-bold">✔</span>
                                Firebase Integration - uses Firebase as backend for authentication and real-time data
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default About