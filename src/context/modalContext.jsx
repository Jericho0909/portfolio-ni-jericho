import { createContext } from "react";
import useModal from "../usehooks/useModal";

const ModalContext = createContext()

export const ModalProvider = ({children}) => {
    const { isOpen, toggleModal } = useModal()
    return (
        <ModalContext.Provider
            value={{
                isOpen,
                toggleModal
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext