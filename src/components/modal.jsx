import { useContext, useState, useEffect } from "react"
import ModalContext from "../context/modalContext"
import WindowSizeContext from "../context/windowSizeContext";
import { motion, AnimatePresence } from "framer-motion";
import { X } from 'lucide-react';
const Modal = ({ selectedProject, setSelectedProject }) => {
    const { isOpen, toggleModal } = useContext(ModalContext)
    const { isMobile } = useContext(WindowSizeContext)
    const [ index, setIndex ] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % selectedProject.image.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    if(!isOpen) return

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-6xl rounded-2xl border-2 bg-black shadow-2xl overflow-hidden">
                <div className="flex justify-end p-4">
                    <button 
                        onClick={() => {
                            toggleModal()
                            setSelectedProject({})
                        }}
                        className=""
                    >
                        <X size={22} color="#EA5A0B"/>
                    </button>
                </div>
                <div className={`flex w-full p-2 gap-3
                    ${isMobile ? "flex-col" : "flex-row"}    
                `}>
                    <div className="flex-1">
                        {isMobile
                            ? (
                                <div className="relative w-full h-[15rem] sm:h-[20rem] overflow-hidden rounded-2xl">
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={index}
                                            src={selectedProject.image[index]}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.8 }}
                                            className="w-full object-fill"
                                        />
                                    </AnimatePresence>
                                </div>
                            )
                            : (
                                <div className="w-full h-[30rem] overflow-hidden rounded-xl">
                                    <img
                                        src={selectedProject.image[0]}
                                        alt={`${selectedProject.title}-Img`}
                                        loading="lazy"
                                        className="w-full h-full object-fill"
                                    />
                                </div>
                            )
                        }
                    </div>
                    <div className="flex items-center justify-start flex-col flex-1">
                        {!isMobile && (
                            <div className="flex items-center justify-center w-full h-full overflow-hidden rounded-xl gap-2 mb-2 ">
                                {selectedProject.image.map((img, index) => (
                                    (index !== 0 && (
                                        <div className="w-full h-full">
                                            <img
                                                src={img}
                                                alt={`${selectedProject.title}-Img`}
                                                loading="lazy"
                                                className="w-full h-full object-fill"
                                            />
                                        </div>
                                    ))
                                ))}
                            </div>
                        )}
                        <div className="w-full h-full p-4">
                            <h2 className="text-gray-400 font-Ptext italic mb-4 font-medium text-[clamp(0.90rem,1.5vw,1.05rem)]">
                                {selectedProject.title}
                            </h2>
                            <p className="text-gray-400 font-Htext font-medium text-[clamp(0.85rem,1.5vw,1rem)] mb-4">
                                {selectedProject.description}
                            </p>
                            <div className="flex flex-wrap gap-3 mb-4">
                                {selectedProject.techStack.map((stack, index) => (
                                    <span
                                        key={index}
                                        className="w-auto p-1 font-Ptext font-medium text-[clamp(0.90rem,1.5vw,1.05rem)] text-white border-b-2 border-Mcolor cursor-pointer"
                                    >
                                        {stack}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center justify-center w-full gap-3 mt-8">
                                {selectedProject.links.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-5 py-2 rounded-xl bg-black text-white hover:bg-gray-800 transition"
                                    >
                                    {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
