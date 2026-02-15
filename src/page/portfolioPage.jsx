import Header from "../components/header"
import Main from "../components/main"
const PortfolioPage = () => {

    const handleScrollToSection = (id) => {
        const sectionId = document.getElementById(id)
        if(sectionId){
            sectionId.scrollIntoView({behavior: 'smooth', block: 'center'})
        }
        else{
            return
        }

    }

    return(
        <>
            <Header
                handleScrollToSection={handleScrollToSection}
            />
            <Main/>
        </>
    )
}

export default PortfolioPage