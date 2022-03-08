import { ResetStyles } from './styles/reset'
import { GlobalStyles } from './styles/global'

import Header from './layout/Header'

function App() {
  return (
    <>
      <ResetStyles />
      <GlobalStyles />

      <Header/>
    </>
  );
}

export default App;
