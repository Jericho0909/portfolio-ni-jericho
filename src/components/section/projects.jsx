import { useEffect, useContext, useState } from "react"
import ActiveSectionContext from "../../context/activeSectionContext"
import WindowSizeContext from "../../context/windowSizeContext"
import ModalContext from "../../context/modalContext"
import useSectionInView from "../../usehooks/useSectionInView"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Coffee } from 'lucide-react';
import { faBasketball } from "@fortawesome/free-solid-svg-icons";
import { CookingPot } from 'lucide-react';
import C1img from "../../assets/img/c1web.webp"
import C2img from "../../assets/img/c2web.webp"
import C3img from "../../assets/img/c3web.webp"
import P1img from "../../assets/img/P1web.webp"
import P2img from "../../assets/img/P2web.webp"
import P3img from "../../assets/img/P3web.webp"
import M1img from "../../assets/img/M1web.webp"
import M2img from "../../assets/img/M2web.webp"
import M3img from "../../assets/img/M3web.webp"


const Projects = ({setSelectedProject}) => {
    const { ref, isVisible } = useSectionInView()
    const { setActiveSection } = useContext(ActiveSectionContext)
    const { stackedCard, isSmallMobile } = useContext(WindowSizeContext)
    const { toggleModal } = useContext(ModalContext)

    const projectsArr = [
        {
            id: 1,
            title: "Kape Shop Ni Jericho",
            description: "A modern coffee ordering app with responsive UI and smooth animations.",
            image: [
                C1img,
                C2img,
                C3img
            ],
            techStack: ["React", "Tailwind", "Framer Motion", "Firebase"],
            links: [
                { 
                    label: "Live Demo", 
                    url: "https://kape-shop-ni-jericho.netlify.app"
                },
                { 
                    label: "GitHub", 
                    url: "https://github.com/Jericho0909/coffee-shop.git"
                },
            ],
            featured: true,
            icon: {
                icon: <Coffee size={24} color={"#6F4E37"}/>
            }
        },
        {
            id: 2,
            title: "Play4pot",
            description: "An interactive competition platform where users can join matches and track game results through a responsive and modern interface.",
            image: [
                P1img,
                P2img,
                P3img

            ],
            techStack: ["React", "TypeScript", "Tailwind", "Framer Motion", "Firebase"],
            links: [
                { 
                    label: "Live Demo", 
                    url: "https://play4pot.netlify.app"
                },
                { 
                    label: "GitHub", 
                    url: "https://github.com/Jericho0909/basketball-potmoney.git"
                },
            ],
            featured: true,
            icon: {
                icon: <FontAwesomeIcon icon={faBasketball} className="text-[#F57C00] text-2xl" />
            }
        },
        {
            id: 3,
            title: "Ma Anong Ulam",
            description: "A meal suggestion web application that helps users decide what to cook by browsing and exploring various food options. Designed with a responsive interface and structured data handling for a smooth user experience.",
            image: [
                M1img,
                M2img,
                M3img
            ],
            techStack: ["React", "TypeScript", "Tailwind", "Framer Motion", "Firebase"],
            links: [
                { 
                    label: "Live Demo", 
                    url: "https://ma-anong-ulam.netlify.app"
                },
                { 
                    label: "GitHub", 
                    url: "https://github.com/Jericho0909/ma-anong-ulam.git"
                },
            ],
            featured: true,
            icon: {
                icon: <CookingPot size={24} color={"#2E7D32"}/>
            },
    
        }
    ]

    const [ items, setItems ] = useState(projectsArr)

    const handleSwipe = () => {
        setItems((prev) => {
            const newArr = [...prev]
            const first = newArr.shift()
            newArr.push(first)
            return newArr
        })
    }

    const handleOpenModal = (id) => {
        const project = projectsArr.find(project => project.id === id)
        setSelectedProject(project)
        toggleModal()
    }

    useEffect(() => {
        if(isVisible){
            setActiveSection("projects")
        }
    }, [isVisible])

    return(
        <section 
            ref={ref}
            id="projects"
            className={`flex justify-center w-full h-[70svh] p-1 mb-4  scroll-mt-20 sm:scroll-mt-32 ${isSmallMobile && "scroll-mt-60"}`}
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
                    MY PROJECTS
                </h1>
                { stackedCard
                    ? (
                        <div className="flex items-center justify-center w-full h-[90%]">
                            <div className="relative w-[300px] h-[400px] mx-auto">
                                {items.map((card, index) => (
                                    <motion.div
                                        key={card.id}
                                        drag={index === 0 ? "x" : false}       
                                        dragConstraints={{ left: 0, right: 0 }}
                                        dragElastic={0}                          
                                        onDragEnd={(e, info) => {
                                            if (index === 0 && Math.abs(info.offset.x) > 100) {
                                            handleSwipe();
                                            }
                                        }}
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{
                                            scale: 1 - index * 0.05,
                                            x: index === 0 ? 0 : index * 15,
                                            opacity: 1,
                                            zIndex: 10 - index
                                        }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="flex justify-center flex-col absolute top-0 left-0 w-full h-full bg-black border border-white rounded-xl shadow-x cursor-grab p-2"
                                    >
                                        <div className="w-full h-[15rem] overflow-hidden rounded-md mb-4">
                                            <img
                                                src={card.image[0]}
                                                alt={`${card.title}-Image`}
                                                loading="lazy"
                                                className="w-full h-full object-fill transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                                style={{ userDrag: "none", WebkitUserDrag: "none" }}
                                            />
                                        </div>
                                        <div className="flex items-center mb-4  justify-center w-full gap-2">
                                            {card.icon.icon}
                                            <span
                                                className="font-Ptext font-bold text-gray-300"
                                            >
                                                {card.title}
                                            </span>
                                        </div>
                                        <div className="flex justify-center w-full">
                                            <button
                                                type="button"
                                                onClick={() => handleOpenModal(card.id)}
                                                className="flex items-center justify-center px-4 py-2 gap-2 text-base text-white border-x-2 border-Mcolor rounded-md w-[45%]"
                                            >
                                                View
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                        </div>
                    )
                    : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full p-2 gap-4">
                            {projectsArr.map((project, index) => (
                                <div
                                    key={index}
                                    className="group flex flex-col justify-between p-4 border-2 border-white rounded-xl bg-black/20 hover:border-orange-500 transition-all duration-300"
                                    >
                                    <div className="w-full h-[15rem] overflow-hidden rounded-md mb-4">
                                        <img
                                            src={project.image[0]}
                                            alt={`${project.title}-Image`}
                                            loading="lazy"
                                            className="w-full h-full object-fill transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                        />
                                    </div>
                                    <div className="flex items-center mb-4  justify-center w-full gap-2">
                                        {project.icon.icon}
                                        <span
                                            className="font-Htext font-bold text-gray-300 group-hover:text-orange-500 truncate text-lg"
                                        >
                                            {project.title}
                                        </span>
                                    </div>
                                    <div className="flex justify-center w-full">
                                        <button
                                            type="button"
                                            onClick={() => handleOpenModal(project.id)}
                                            className="flex items-center justify-center px-4 py-2 gap-2 font-Htext font-semibold text-base text-white border-x-2 border-Mcolor rounded-md w-[45%] hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all duration-300"
                                        >
                                            View
                                        </button>
                                    </div>
                                </div>


                            ))}
                        </div>
                    )
                }
            </motion.div>
        </section>
    )
}

export default Projects