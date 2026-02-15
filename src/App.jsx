import { Routes, Route } from "react-router-dom"
import PortfolioPage from "./page/portfolioPage"
import { ActiveSectionProvider } from "./context/activeSectionContext"

function App() {
  return (
    <ActiveSectionProvider>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
      </Routes>
    </ActiveSectionProvider>
  )
}

export default App
