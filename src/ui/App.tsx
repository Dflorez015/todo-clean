import { mainTheme } from "@constants/themes"
import { HomePage } from "@pages/home"
import { GlobalStyle } from "@style/globalStyle"


function App() {

  return (
    <>
      <HomePage />
      <GlobalStyle {...mainTheme} />
    </>
  )
}

export default App
