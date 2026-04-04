import { useEffect, useContext, useState } from "react"
import WindowSizeContext from "../../context/windowSizeContext"
import ActiveSectionContext from "../../context/activeSectionContext"
import useSectionInView from "../../usehooks/useSectionInView"
import ContactMe from "../../utils/contactMe"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import toast from "react-hot-toast";

const Contact = () => {
    const { ref, isVisible } = useSectionInView()
    const { isSmallMobile } = useContext(WindowSizeContext)
    const { setActiveSection } = useContext(ActiveSectionContext)
    const [ email, setEmail ] = useState("")
    const [ message, setMessage ] = useState("")
    const [ isLoading, setIsLoading ] = useState(false)

    const PlatForms = [
        {
            id: 1,
            socialName: "Email",
            contact: "mailto:jerichozara.dev@gmail.com",
            icon: <FontAwesomeIcon
                icon={faEnvelope}
                className="text-2xl text-white"
            />
        },
        {
            id: 2,
            socialName: "GitHub",
            contact: "https://github.com/Jericho0909",
            icon: <FontAwesomeIcon
                icon={faGithub}
                className="text-2xl text-gray-300"
            />
        },
        {
            id: 3,
            socialName: "LinkedIn",
            contact: "https://www.linkedin.com/in/jericho-zara-2350733b3/",
            icon: <FontAwesomeIcon
                icon={faLinkedin}
                className="text-2xl text-[#0A66C2]"
            />
        }
    ]

    const sendEmail = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const loadingToast = toast.loading("Sending message...");

        try {
            await ContactMe(email, message)
            setIsLoading(false)
            setEmail("")
            setMessage("")
            toast.dismiss(loadingToast)
            toast.success("Email sent successfully!")
        } catch (error) {
            toast.dismiss(loadingToast);
            toast.error("Failed to send email")
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if(isVisible){
            setActiveSection("contact")
        }
    }, [isVisible])
    return(
        <motion.section 
            ref={ref}
            id="contact"
            className={`flex items-start justify-center w-full h-auto p-1 scroll-mt-20 sm:scroll-mt-32 ${isSmallMobile && "scroll-mt-[13.50rem]"}`}
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
                className="flex items-center justify-around flex-col w-full h-auto sm:w-[85%] lg:w-[70%] xl:w-[55%] p-3"
            >
                <h1 className="flex justify-start w-full text-white font-Htext font-medium text-[clamp(0.95rem,2vw,1.50rem)] border-b border-white p-3 mb-2">
                    CONTACT
                </h1>
                <div className="flex flex-col w-full h-auto p-2">
                    <div className="flex items-center justify-around w-full gap-2 sm:p-2">
                        {PlatForms.map((item) => (
                            <a  
                                key={item.id}
                                href={item.contact}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center w-[7rem] sm:w-[10rem] h-16 gap-2 rounded-xl border border-white/20 transition-all duration-300 mb-3 hoverable:hover:border-Mcolor hoverable:hover:bg-orange-500/10 hoverable:hover:shadow-[0_0_15px_rgba(255,165,0,0.5)]"
                                >
                                <span className="text-gray-400 group-hoverable:hover:text-orange-400 transition-all duration-300">
                                    {item.icon}
                                </span>

                                <span
                                    
                                    className="text-gray-300 group-hoverable:hover:text-white transition-colors duration-300"
                                >
                                    {item.socialName}
                                </span>
                            </a>
                        ))}
                    </div>
                    <form
                        onSubmit={(e) => sendEmail(e)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
                                e.preventDefault()
                                sendEmail(e)
                            }
                        }}
                        className="flex items-start justify-start flex-col relative w-full sm:p-2"
                    >
                        <input
                            id="email"
                            type="email"
                            placeholder="example@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 bg-black border border-gray-600 rounded-lg text-white font-Ptext mb-4 placeholder-gray-500 outline-none transition-all duration-300 focus:border-Mcolor focus:ring-2 focus:ring-orange-500/10"
                        />
                        <textarea
                            id="message"
                            rows="10"
                            placeholder="Write your message here..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="custom-scroll w-full px-4 py-3 bg-black flex-1 border border-gray-600 rounded-lg text-white font-Ptext mb-4 placeholder-gray-500 outline-none resize-none overflow-auto-y transition-all duration-300 focus:border-orange-500
                            focus:ring-2 focus:ring-orange-500/30"
                        />
                        <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-Mcolor text-black font-semibold tracking-wide transition-all duration-300 hoverable:hover:bg-orange-400 hoverable:hover:shadow-lg hoverable:hover:shadow-orange-500/40 active:scale-95"
                        >
                            Send Message
                        </button>
                        {isLoading && (
                            <div className="flex items-center justify-center absolute w-full h-full inset-0 bg-inherit backdrop-blur-sm">
                                <div className="loader">

                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </motion.div>
            
        </motion.section>
    )
}

export default Contact