import { useEffect, useContext, useState } from "react"
import ActiveSectionContext from "../../context/activeSectionContext"
import WindowSizeContext from "../../context/windowSizeContext"
import useSectionInView from "../../usehooks/useSectionInView"
import StackedCard from "../stackedCard,"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHtml5,
    faCss3Alt,
    faJs,
    faReact,
    faTailwindCss,
    faTypescript,
    faGithub
} from "@fortawesome/free-brands-svg-icons";
import { Flame } from 'lucide-react';
import { Wrench } from 'lucide-react';
import { Bot } from 'lucide-react';


const TechStack = () => {
    const { ref, isVisible } = useSectionInView()
    const { setActiveSection } = useContext(ActiveSectionContext)
    const { isSmallMobile, stackedCard } = useContext(WindowSizeContext)

    const techStackArr = [
        {
            category: "FrontEnd",
            items: [
                {
                    id: 1,
                    techName: "Html5", 
                    icon: <FontAwesomeIcon 
                        icon={faHtml5} 
                        className="text-2xl text-[#E34F26]"
                    />,
                    mastery: 85
                },
                {
                    id: 2,
                    techName: "Css3", 
                    icon: <FontAwesomeIcon 
                        icon={faCss3Alt} 
                        className="text-2xl text-[#1572B6]"
                    />,
                    mastery: 70
                },
                {
                    id: 3,
                    techName: "JavaScript", 
                    icon: <FontAwesomeIcon 
                        icon={faJs}
                        className="text-2xl text-[#F7DF1E]"
                    />,
                    mastery: 70
                },
                {
                    id: 4,
                    techName: "React", 
                    icon: <FontAwesomeIcon 
                        icon={faReact} 
                        className="text-2xl text-[#61DAFB]"
                    />,
                    mastery: 85
                },
                {
                    id: 5,
                    techName: "Tailwind", 
                    icon: <FontAwesomeIcon 
                        icon={faTailwindCss}
                        className="text-2xl text-[#38BDF8]"
                    />,
                    mastery: 80
                },
                {
                    id: 6,
                    techName: "TypeScript", 
                    icon: 
                        <FontAwesomeIcon icon={faTypescript}
                        className="text-2xl text-[#3178C6]"
                    />,
                    mastery: 70
                }
            ],
            color: "border-blue-600"
        },
        {
            category: "BackEnd",
            items: [
                {
                    id: 1,
                    techName: "Firebase", 
                    icon: <Flame size={29} color="#FFA000"/>,
                    mastery: 70
                },
            ],
            color: "border-green-600"
        },
        {
            category: "Tools",
            items: [
                {
                    id: 1,
                    techName: "Git", 
                    icon: <FontAwesomeIcon
                        icon={faGithub}
                        className="text-2xl text-gray-300"
                    />,
                    mastery: 70
                },
                {
                    id: 2,
                    techName: "VS Code", 
                    icon: <Wrench size={29} color="#007ACC"/>,
                    mastery: 80
                },
                {
                    id: 3,
                    techName: "AI-Assisted", 
                    icon: <Bot size={29} color="#6e6e6e"/>,
                    mastery: 85
                },

            ],
            color: "border-orange-600"
        }

    ]


    const [ items, setItems ] = useState(techStackArr)

    const CardContent = (card) => {
        return(
            <>
                <p className="mb-4 text-center w-full">
                    <span
                        className="text-white font-Htext italic font-semibold text-[clamp(0.90rem,1.5vw,1.05rem)] p-1"
                    >
                        {card.category}
                    </span>
                </p>
                <ul>
                    {card.items.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-center justify-start gap-2 mb-2"
                        >
                            <span>
                                {item.icon}
                            </span>
                            <span className="font-Ptext font-bold text-gray-300 text-[clamp(0.85rem,1.5vw,1rem)] w-[30%]">
                                {item.techName}
                            </span>
                            <div className="flex-1 bg-neutral-800 rounded-md p-1">
                                <div
                                    className="h-5 rounded-md bg-gradient-to-r from-blue-500 to-blue-400 text-xs font-bold text-black flex items-center justify-center"
                                    style={{ width: `${item.mastery}%` }}
                                >
                                    {item.mastery}%
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </>
        )
    }


    useEffect(() => {
        if(isVisible){
            setActiveSection("techstack")
        }
    }, [isVisible])

    return(
        <section 
            ref={ref}
            id="techstack"
            className={`flex justify-center w-full h-[70svh] p-1 mb-4  scroll-mt-20 sm:scroll-mt-32 ${isSmallMobile && "scroll-mt-40"}`}
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
                className="w-[90%] md:w-[80%] lg:w-[93%] h-full"
            >
                <h1 className="flex justify-start text-white font-Htext font-medium text-[clamp(0.95rem,2vw,1.50rem)]  p-3 mb-2">
                    TECHSTACK
                </h1>
                {stackedCard
                    ? (
                        <div className="flex items-center justify-center w-full h-[90%]">
                            <div className="relative w-[300px] h-[400px] mx-auto">
                                <StackedCard
                                    items={items}
                                    setItems={setItems}
                                    CardContent={CardContent}
                                />
                            </div>
                        </div>
                    )
                    : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full p-2 gap-4">
                            {techStackArr.map((stack, index ) => (
                                <div
                                    key={index} 
                                    className={`p-4 w-full border-2 ${stack.color} rounded-xl`}
                                >
                                    {CardContent(stack)}
                                </div>
                            ))}
                        </div>
                    )
                }
            </motion.div>
        </section>
    )
}

export default TechStack