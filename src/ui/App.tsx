import { HomePage } from "@pages/home"
import { appStore } from "@store/app"
import { GlobalStyle } from "@style/globalStyle"


function App() {

  const themeChoosen = appStore((state) => state.themeChoosen)

  return (
    <>
      <HomePage />
      <GlobalStyle {...themeChoosen} />
    </>
  )
}

export default App
