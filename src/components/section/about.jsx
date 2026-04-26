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
            className={`grid grid-cols-2  w-full h-[200svh] p-1 mb-4 scroll-mt-20 sm:scroll-mt-32 ${isSmallMobile && "scroll-mt-[13.50rem]"}`}
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
                className="flex items-start flex-col w-full sm:w-[85%] lg:w-[70%] xl:w-full p-3 sticky top-24 h-[73svh]  bg-white/5 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(0,150,255,0.3)] rounded-xl border border-white/10"
            >
                <h1 className="flex justify-start w-full text-white font-Htext font-medium text-[clamp(0.95rem,2vw,1.50rem)] border-b border-white p-3 mb-2">
                    ABOUT
                </h1>
                <div className="flex items-start justify-center flex-col w-full p-2 gap-2 cursor-default mb-2">
                    <div className="relative w-full h-[13rem] sm:h-[11rem]  overflow-hidden">
                        <div className="flex justify-center absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none z-10">
                            <img
                                src={CodeImg}
                                alt="Coding setup preview"
                                loading="lazy"
                                className="w-[50%] h-full object-fill rounded-xl"
                            />   
                        </div>
                    </div>
                    <div className="flex items-center flex-col p-1">
                        <div className="mb-2 lg:mb-3">
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
            <div className="flex flex-col p-3">
                <h1 className="flex justify-end w-full text-white font-Htext font-medium text-[clamp(0.95rem,2vw,1.50rem)] border-b border-white p-3 mb-2">
                    Growth Timeline
                </h1>
                <div className="flex items-start justify-center w-full h-full relative">
                    <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-white z-10">
                    </div>
                    <div className="flex flex-col items-center gap-24 mt-10">
                        <div className="flex items-center flex-col gap-2 relative z-20 bg-black px-3 py-2 text-white">
                            <h1 className="font-Htex font-medium text-[clamp(0.85rem,2vw,1rem)]">
                                July 2024 - September 2024 / HTML5 and CSS3
                            </h1>
                            <p className="text-white font-Ptext font-medium text-[clamp(0.80rem,1.5vw,0.90rem)]">
                                Learned HTML and CSS through self-study and improved my skills by recreating real-world website designs (Foodpanda, Facebook, YouTube). Focused on layout structuring, responsive design, and UI styling.
                            </p>
                        </div>
                        <div className="flex items-center flex-col gap-2 relative z-20 bg-black px-3 py-2 text-white">
                            <h1 className="font-Htex font-medium text-[clamp(0.85rem,2vw,1rem)]">
                                September 2024 - December 2024 / JavaScript
                            </h1>
                            <p className="text-white font-Ptext font-medium text-[clamp(0.80rem,1.5vw,0.90rem)]">
                                Developed strong JavaScript fundamentals by building multiple projects, including an anime review website, a Netflix-inspired UI, a to-do list app, an eCommerce platform, TastyFood, and a personal portfolio. Applied key concepts such as DOM manipulation, event handling, and dynamic rendering to create interactive user interfaces.
                            </p>
                        </div>
                        <div className="flex items-center flex-col gap-2 relative z-20 bg-black px-3 py-2 text-white">
                            <h1 className="font-Htex font-medium text-[clamp(0.85rem,2vw,1rem)]">
                                January 2025 - April 2025 / React.js
                            </h1>
                            <p className="text-white font-Ptext font-medium text-[clamp(0.80rem,1.5vw,0.90rem)]">
                                Developed React-based applications, including a to-do list and a full CRUD platform called “Kitchen,” a semi real-time food-sharing app. Implemented features such as user authentication, post interactions, profile management, and content visibility controls. Utilized advanced frontend techniques including infinite scroll, pagination, and scroll restoration, with a JSON-based backend.
                            </p>
                        </div>
                        <div className="flex items-center flex-col gap-2 relative z-20 bg-black px-3 py-2 text-white">
                            <h1 className="font-Htex font-medium text-[clamp(0.85rem,2vw,1rem)]">
                                June 2025 / Rest Period
                            </h1>
                            <p className="text-white font-Ptext font-medium text-[clamp(0.80rem,1.5vw,0.90rem)]">
                               Took a short break to recharge and reflect. Returned with improved focus and continued developing my skills in web development.
                            </p>
                        </div>
                        <div className="flex items-center flex-col gap-2 relative z-20 bg-black px-3 py-2 text-white">
                            <h1 className="font-Htex font-medium text-[clamp(0.85rem,2vw,1rem)]">
                                July 2025 - November 2025 First Personal Project
                            </h1>
                            <p className="text-white font-Ptext font-medium text-[clamp(0.80rem,1.5vw,0.90rem)]">
                               Developed my first full-stack personal project, “Kape Shop ni Jericho,” a coffee shop management system built with React, Tailwind CSS, and Firebase. The application features a CRUD-based architecture with separate admin and customer interfaces. The admin dashboard supports product, order, employee, stock, and customer management, while the customer side allows users to browse and place orders online.
                            </p>
                        </div>
                        <div className="flex items-center flex-col gap-2 relative z-20 bg-black px-3 py-2 text-white">
                            <h1 className="font-Htex font-medium text-[clamp(0.85rem,2vw,1rem)]">
                                November 2025 - January 2026 Second Personal Project
                            </h1>
                            <p className="text-white font-Ptext font-medium text-[clamp(0.80rem,1.5vw,0.90rem)]">
                                After completing my first project, I immediately built another application called “Play4Pot”, a web-based platform developed using React, TypeScript, and Tailwind CSS.

                                The application features two main sections: an Admin Page and a Voter Page. The Admin Page allows management of matches by setting up competing players, match location, start time, and the initial pot amount. Meanwhile, the Voter Page enables users to view ongoing matchups, understand the voting rules, and cast their votes for their chosen player.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About