import { ResetStyles } from './styles/reset'
import { GlobalStyles } from './styles/global'

import Header from './layout/Header'
import Main from './layout/Main'

function App() {
  return (
    <>
      <ResetStyles />
      <GlobalStyles />

      <Header/>
      <Main/>
    </>
  );
}

export default App;
