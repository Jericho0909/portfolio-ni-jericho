import { useEffect, useContext } from "react"
import WindowSizeContext from "../../context/windowSizeContext"
import ActiveSectionContext from "../../context/activeSectionContext"
import useSectionInView from "../../usehooks/useSectionInView"
import { motion } from "framer-motion"
import CodeImg from "../../assets/img/code.webp"
const About = () => {
    const { ref, isVisible } = useSectionInView()
    const { stackedCard, isSmallMobile } = useContext(WindowSizeContext)
    const { setActiveSection } = useContext(ActiveSectionContext)

    useEffect(() => {
        if(isVisible){
            setActiveSection("about")
        }
    }, [isVisible])

    const Card = (timeline, text) => {
        return(
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                    duration: 0.7, 
                    delay: 0.3, 
                    ease: "easeIn" 
                }}
                className="relative w-[min(500px,90vw)] group"
            >
                <div className="absolute left-1/2 -translate-x-1/2 -top-6 
                w-4 h-4 bg-orange-500 rounded-full z-20 shadow-[0_0_12px_rgba(249,115,22,0.8)] hoverable:group-hover:shadow-[0_0_25px_rgba(249,115,22,1)] transition-all duration-300
                "></div>
                <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center transition-all duration-300 hoverable:hover:border-orange-500 hoverable:hover:bg-orange-500/5 hoverable:hover:shadow-[0_0_25px_rgba(249,115,22,0.4)]">
                    <h1 className="text-Mcolor font-Htext text-sm mb-2">
                        {timeline}
                    </h1>
                    <p className="text-white/70 text-sm leading-relaxed">
                        {text}
                    </p>

                </div>
            </motion.div>
        )
    }


    return(
        <section
            ref={ref}
            id="about"
            className={`w-full h-auto p-1 mb-4 gap-4 scroll-mt-20 sm:scroll-mt-32 ${stackedCard ? "grid grid-cols-1" : "grid grid-cols-2"}  ${isSmallMobile && "scroll-mt-[13.50rem]"}`}
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
                className={`flex items-start flex-col w-full bg-white/5 backdrop-blur-md rounded-xl border border-white/10
                    ${stackedCard ? "h-auto" : "p-3 sticky top-36  h-[74svh]"}
                `}
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
            {stackedCard
                ? (
                    <div className="w-full h-auto border ">
                        <div className="flex items-center justify-center w-full h-auto p-3 relative">
                            <div className="absolute translate-y-1/2 w-full h-[0.10rem] rounded bg-white">

                            </div>
                            <div className="text-white">
                                asdasd
                            </div>
                        </div>
                    </div>
                )
                : (
                    <div className="flex flex-col p-3">
                        <motion.h1 
                            initial={{ opacity: 0, x: 90 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ 
                                duration: 0.8, 
                                delay: 0.3, 
                                ease: "easeIn" 
                            }}
                            className="flex justify-end w-full text-white font-Htext font-medium text-[clamp(0.95rem,2vw,1.50rem)] border-b border-white p-3 mb-2">
                            Growth Timeline
                        </motion.h1>
                        <div className="flex items-start justify-center w-full h-full">
                            <div className="flex flex-col items-center gap-24 mt-10">
                                {
                                    Card("July 2024 - September 2024 / HTML5 & CSS3", "Learned HTML and CSS through self-study and improved my skills by recreating real-world website designs (Foodpanda, Facebook, YouTube). Focused on layout structuring, responsive design, and UI styling.")
                                }
                                {
                                    Card("September 2024 - December 2024 / JavaScript", "Developed strong JavaScript fundamentals by building multiple projects, including an anime review website, a Netflix-inspired UI, a to-do list app, an eCommerce platform, TastyFood, and a personal portfolio. Applied key concepts such as DOM manipulation, event handling, and dynamic rendering to create interactive user interfaces.")
                                }
                                {
                                    Card("January 2025 - April 2025 / React.js", "Developed React-based applications, including a to-do list and a full CRUD platform called “Kitchen,” a semi real-time food-sharing app. Implemented features such as user authentication, post interactions, profile management, and content visibility controls. Utilized advanced frontend techniques including infinite scroll, pagination, and scroll restoration, with a JSON-based backend.")
                                }
                                {
                                    Card("June 2025 / Rest Period", "Took a short break to recharge and reflect. Returned with improved focus and continued developing my skills in web development.")
                                }
                                {
                                    Card("July 2025 - November 2025 First Personal Project", "Developed my first full-stack personal project, “Kape Shop ni Jericho,” a coffee shop management system built with React, Tailwind CSS, and Firebase. The application features a CRUD-based architecture with separate admin and customer interfaces. The admin dashboard supports product, order, employee, stock, and customer management, while the customer side allows users to browse and place orders online.")
                                }
                                {
                                    Card("November 2025 - January 2026 Second Personal Project", "Developed “Play4Pot,” a web-based voting platform for 1v1 matchups using React, TypeScript, and Tailwind CSS. Implemented role-based interfaces, including an admin panel for managing match details (players, location, schedule, and pot amount) and a user interface for viewing matches, understanding rules, and casting votes.")
                                }
                                {
                                    Card("January 2026 - Febuary 2026 Third Personal Project", "Developed “Ma Anong Ulam,” a recipe search web application built with React, TypeScript, and Tailwind CSS. Designed to help users quickly discover meals by searching via dish names or filtering based on available ingredients. The platform focuses on improving user experience by providing practical, real-world meal suggestions based on what users already have.")
                                }
                                {
                                    Card("Febuary 2026 - March 2026 / Create My Portfolio", "Developed a personal portfolio showcasing my frontend development approach, with a focus on reusable components, UI refinement, and user interaction. Built using React and Tailwind CSS, with Framer Motion for animations. Features include a reusable StackedCard system, responsive layouts, interactive modals, and an EmailJS-integrated contact form, all designed with performance, usability, and clean design principles in mind.")
                                }
                                {
                                    Card("Present / Continuing to Learn and Build Projects", "Actively exploring modern web development practices and improving my frontend skills through hands-on React projects.")
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </section>
    )
}

export default About