import { createContext, useContext } from "react"
import { styleClassName } from "../../../shared/constants/style"

interface MainPageContent {
  skeleton: boolean
}

const initialMainPageContent: MainPageContent = { skeleton: false }

/** CONTAINS: skeleton */
const MainPageContext = createContext<MainPageContent>(initialMainPageContent)


const useMainPageContext = () => {
  const context = useContext(MainPageContext)
  if (!context) {
    throw new Error("---- CONTEXT FAILED")
  }
  return context
}

const MainPageHeader = ({ children }: { children: React.ReactNode }) => {
  return typeof children === "string" ? <p>{children}</p> : <div>{children}</div>
}

const MainPageSection = ({ children }: { children: React.ReactNode }) => {
  const { skeleton } = useMainPageContext()
  return (
    <div className={!skeleton ? styleClassName.groupByBorder: undefined}>
      {children}
    </div>
  )
}

const MainPageGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styleClassName.gridCard}>
      {children}
    </div>
  )
}

const MainPageLayout = ({ children, skeleton = false }: { children: React.ReactNode, skeleton?: boolean }) => {
  return (
    <MainPageContext.Provider value={{ skeleton }}>
      <div className={styleClassName.flexCol}>
        {children}
      </div>
    </MainPageContext.Provider>
  )
}

MainPageLayout.Header = MainPageHeader;
MainPageLayout.Section = MainPageSection;
MainPageLayout.Grid = MainPageGrid;

export default MainPageLayout