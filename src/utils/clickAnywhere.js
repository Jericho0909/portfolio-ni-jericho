const ClickAnyWhere = (ref, state) => {
    const handleClickOutside = (event) => {
        if(ref.current &&!ref.current.contains(event.target)){
            state(false)
        }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
    document.removeEventListener("mousedown", handleClickOutside)
    }
}

export default ClickAnyWhere