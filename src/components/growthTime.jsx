import { motion } from "framer-motion"

const GrowthTimeLine = () => {
    const timeLineData = [
        {
            timeline: "July 2024 - September 2024 / HTML5 & CSS3",
            text: "Learned HTML and CSS through self-study and improved my skills by recreating real-world website designs (Foodpanda, Facebook, YouTube). Focused on layout structuring, responsive design, and UI styling."
        },
        {
            timeline: "September 2024 - December 2024 / JavaScript",
            text: "Developed strong JavaScript fundamentals by building multiple projects, including an anime review website, a Netflix-inspired UI, a to-do list app, an eCommerce platform, TastyFood, and a personal portfolio. Applied key concepts such as DOM manipulation, event handling, and dynamic rendering to create interactive user interfaces."
        },
        {
            timeline: "January 2025 - April 2025 / React.js",
            text: "Developed React-based applications, including a to-do list and a full CRUD platform called “Kitchen,” a semi real-time food-sharing app. Implemented features such as user authentication, post interactions, profile management, and content visibility controls. Utilized advanced frontend techniques including infinite scroll, pagination, and scroll restoration, with a JSON-based backend."
        },
        {
            timeline: "June 2025 / Rest Period",
            text: "Took a short break to recharge and reflect. Returned with improved focus and continued developing my skills in web development."
        },
        {
            timeline: "July 2025 - November 2025 First Personal Project",
            text: "Developed my first full-stack personal project, “Kape Shop ni Jericho,” a coffee shop management system built with React, Tailwind CSS, and Firebase. The application features a CRUD-based architecture with separate admin and customer interfaces. The admin dashboard supports product, order, employee, stock, and customer management, while the customer side allows users to browse and place orders online."
        },
        {
            timeline: "November 2025 - January 2026 Second Personal Project",
            text: "Developed “Play4Pot,” a web-based voting platform for 1v1 matchups using React, TypeScript, and Tailwind CSS. Implemented role-based interfaces, including an admin panel for managing match details (players, location, schedule, and pot amount) and a user interface for viewing matches, understanding rules, and casting votes."
        },
        {
            timeline: "January 2026 - Febuary 2026 Third Personal Project",
            text: "Developed “Ma Anong Ulam,” a recipe search web application built with React, TypeScript, and Tailwind CSS. Designed to help users quickly discover meals by searching via dish names or filtering based on available ingredients. The platform focuses on improving user experience by providing practical, real-world meal suggestions based on what users already have."
        },
        {
            timeline: "Febuary 2026 - March 2026 / Create My Portfolio",
            text: "Developed a personal portfolio showcasing my frontend development approach, with a focus on reusable components, UI refinement, and user interaction. Built using React and Tailwind CSS, with Framer Motion for animations. Features include a reusable StackedCard system, responsive layouts, interactive modals, and an EmailJS-integrated contact form, all designed with performance, usability, and clean design principles in mind."
        },
        {
            timeline: "Present / Continuing to Learn and Build Projects",
            text: "Actively exploring modern web development practices and improving my frontend skills through hands-on React projects."
        },

    ]

    const Card = ({timeline, text}) => {
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
                <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center transition-all duration-300 hoverable:hover:border-orange-500 hoverable:hover:bg-orange-500/5 hoverable:hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] cursor-default">
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
                    {timeLineData.map((item, index) => (
                        <Card key={index} timeline={item.timeline} text={item.text} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GrowthTimeLine