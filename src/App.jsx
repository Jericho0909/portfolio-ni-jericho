import { Routes, Route } from "react-router-dom"
import PortfolioPage from "./page/portfolioPage"
import { ActiveSectionProvider } from "./context/activeSectionContext"
import { WindowSizeProvider } from "./context/windowSizeContext"
import { ModalProvider } from "./context/modalContext"

function App() {
  return (
    <ActiveSectionProvider>
      <WindowSizeProvider>
        <ModalProvider>
          <Routes>
            <Route path="/" element={<PortfolioPage />} />
          </Routes>
        </ModalProvider>
      </WindowSizeProvider>
    </ActiveSectionProvider>
  )
}

export default App
