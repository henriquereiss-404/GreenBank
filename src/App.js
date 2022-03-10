import { ResetStyles } from './styles/reset'
import { GlobalStyles } from './styles/global'

import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'

function App() {
  return (
    <>
      <ResetStyles />
      <GlobalStyles />

      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
