import { Copyright } from 'lucide-react';
const Footer = () => {
    return(
        <footer className="flex items-center justify-center w-full py-6 text-white text-sm mt-10 gap-1">
            <span>
                <Copyright size={16} color="white"/>
            </span>
            <span>
                2026 Jericho Zara
            </span>
        </footer>
    )
}

export default Footer