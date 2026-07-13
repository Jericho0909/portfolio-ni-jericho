import { Routes, Route } from "react-router-dom"
import PortfolioPage from "./page/portfolioPage"
import { ActiveSectionProvider } from "./context/activeSectionContext"
import { WindowSizeProvider } from "./context/windowSizeContext"


function App() {
  return (
    <ActiveSectionProvider>
      <WindowSizeProvider>
          <Routes>
            <Route path="/" element={<PortfolioPage />} />
          </Routes>
      </WindowSizeProvider>
    </ActiveSectionProvider>
  )
}

export default App
