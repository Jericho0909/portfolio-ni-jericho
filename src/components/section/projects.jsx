import { useEffect, useContext, useState } from "react"
import ActiveSectionContext from "../../context/activeSectionContext"
import WindowSizeContext from "../../context/windowSizeContext"
import ModalContext from "../../context/modalContext"
import useSectionInView from "../../usehooks/useSectionInView"
import StackedCard from "../stackedCard,"
import { motion } from "framer-motion"
import { Coffee, CookingPot, Eye } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketball } from "@fortawesome/free-solid-svg-icons";
import C1img from "../../assets/img/c1web.webp"
import C2img from "../../assets/img/c2web.webp"
import C3img from "../../assets/img/c3web.webp"
import P1img from "../../assets/img/P1web.webp"
import P2img from "../../assets/img/P2web.webp"
import P3img from "../../assets/img/P3web.webp"
import M1img from "../../assets/img/M1web.webp"
import M2img from "../../assets/img/M2web.webp"
import M3img from "../../assets/img/M3web.webp"
import A1img from "../../assets/img/A1web.webp"
import A2img from "../../assets/img/A2web.webp"
import A3img from "../../assets/img/A3web.webp"


const Projects = ({setSelectedProject}) => {
    const { ref, isVisible } = useSectionInView({h:0.22})
    const { setActiveSection } = useContext(ActiveSectionContext)
    const { stackedCard, isSmallMobile } = useContext(WindowSizeContext)
    const { toggleModal } = useContext(ModalContext)

    const projectsArr = [
        {
            id: 1,
            title: "Kape Shop Ni Jericho",
            description: "A full-stack coffee shop management system with order monitoring, inventory tracking, and role-based admin controls. Includes admin and customer interfaces, Firebase authentication, and real-time database integration.",
            image: [
                C1img,
                C2img,
                C3img
            ],
            techStack: ["React", "Tailwind", "Firebase"],
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
            description: "A betting management system for 1v1 basketball matches with admin-controlled match setup and bet monitoring. Users can place bets using verified accounts and receive confirmations.",
            image: [
                P1img,
                P2img,
                P3img

            ],
            techStack: ["React", "TypeScript", "Tailwind", "Firebase"],
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
            description: "A recipe search and filtering web application that enables users to find dishes by name or ingredients. Implemented dynamic search functionality.",
            image: [
                M1img,
                M2img,
                M3img
            ],
            techStack: ["React", "TypeScript", "Tailwind", "Firebase"],
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
    
        },
        {
            id: 4,
            title: "My AniMa",
            description: "An anime and manga tracking web application that helps users organize and manage their watchlists and reading lists. Supports status tracking and favorites for quick access.",
            image: [
                A1img,
                A2img,
                A3img
            ],
            techStack: ["Next.js(React)", "TypeScript", "Tailwind", "Supabase"],
            links: [
                { 
                    label: "Live Demo", 
                    url: "https://my-ani-ma.vercel.app/"
                },
                { 
                    label: "GitHub", 
                    url: "https://github.com/Jericho0909/myAniMa.git"
                },
            ],
            featured: true,
            icon: {
                icon: <Eye size={24} color={"#DB2777"}/>
            },
        }

    ]

    const [ items, setItems ] = useState(projectsArr)

    const handleOpenModal = (id) => {
        const project = projectsArr.find(project => project.id === id)
        setSelectedProject(project)
        toggleModal()
    }

    const CardContent = (card) => {
        return(
            <>
                <div className="w-full h-[15rem] overflow-hidden rounded-md mb-4">
                    <img
                        src={card.image[0]}
                        alt={`${card.title}-Image`}
                        loading="lazy"
                        className="w-full h-full object-fill transform hoverable:group-hover:scale-105 transition-transform duration-500 ease-in-out"
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
                <div className="flex items-center justify-between p-1 w-full">
                    <button
                        type="button"
                        onClick={() => handleOpenModal(card.id)}
                        className="flex items-center justify-center px-4 py-2 gap-2 font-Htext font-semibold text-xs text-white border-x-2 border-Mcolor rounded-md hoverable:hover:bg-Mcolor hoverable:hover:border-Mcolor hover:text-black transition-all duration-300"
                    >
                        View
                    </button>
                    {card.links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold px-5 py-2 rounded-xl bg-black text-white hoverable:hover:bg-gray-800 transition"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </>
        )
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
            className={`flex justify-center w-full h-auto p-1 mb-4  scroll-mt-20 sm:scroll-mt-32 ${isSmallMobile && "scroll-mt-40"}`}
        >
            <div 
                className="w-full p-1"
            >
                <h1 className="flex justify-start text-white font-Htext font-medium text-[clamp(0.95rem,2vw,1.50rem)] p-3 mb-2">
                    MY PROJECTS
                </h1>
                <div className="w-full p-2">
                    {projectsArr.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ 
                                duration: 0.6, 
                                delay: 0.2, 
                                ease: "easeIn" 
                            }}
                            className="flex items-center flex-col md:flex-row w-full p-4 mb-10 md:gap-2 lg:gap-4 bg-[#0a0a0a] border border-white/15 rounded-xl shadow-lg shadow-black/40 transition-all duration-300 hoverable:hover:border-[#EA5A0B] hoverable: hover:shadow-[0_0_20px_rgba(234,90,11,0.35)]"
                        >
                            <div className="w-full p-1">
                                <div className="w-full rounded-xl overflow-hidden">
                                    <img
                                        src={project.image[0]}
                                        alt="projectImg"
                                        loading="lazy"
                                        className="w-full object-contain"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-center flex-col w-full p-1">
                                <div className="flex items-center w-full overflow-hidden rounded-xl gap-2 mb-4">
                                    {project.image.map((img, index) => (
                                        (index !== 0 && (
                                            <div
                                                key={index}
                                                className="w-full h-[13rem]"
                                                >
                                                <img
                                                    src={img}
                                                    alt="projectImg"
                                                    loading="lazy"
                                                    className="w-full h-full object-fill"
                                                />
                                            </div>
                                        ))
                                    ))}
                                </div>
                                <div className="flex items-center mb-4  justify-center w-full gap-2">
                                    {project.icon.icon}
                                    <span
                                        className="text-2xl font-Htext font-bold text-gray-300"
                                    >
                                        {project.title}
                                    </span>
                                </div>
                                <p className="text-gray-400 font-Htext font-medium text-[clamp(0.90rem,1.5vw,1.10rem)] mb-4 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex items-start flex-wrap w-full gap-4 mb-2">
                                    {project.techStack.map((stack, index) => (
                                        <span
                                            key={index}
                                            className="w-auto p-1 font-Ptext font-medium text-[clamp(0.90rem,1.5vw,1.05rem)] text-white border-b-2 border-Mcolor cursor-pointer"
                                        >
                                            {stack}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-end w-full gap-3">
                                    {project.links.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs font-semibold px-5 py-2
                                            rounded-xl bg-black text-white hoverable:hover:bg-gray-800 transition"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects