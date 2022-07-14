import { HomePage } from "./pages/home"
import { mainTheme } from "./utils/constant/themes"
import { GlobalStyle } from "./utils/style/globalStyle"

function App() {

  return (
    <>
      <HomePage />
      <GlobalStyle {...mainTheme} />
    </>
  )
}

export default App
