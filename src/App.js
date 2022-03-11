import ScrollReveal from 'scrollreveal'
import { ResetStyles } from './styles/reset'
import { GlobalStyles } from './styles/global'

import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'

window.onload =  () => {
  ScrollReveal().reveal('.benefit-reveal', { delay: 200 })
  ScrollReveal().reveal('.arrow-reveal', { delay: 300, distance: '-32px' })
  ScrollReveal().reveal(
    '.reveal-right',
    {
      delay: 500,
      origin: 'left',
      distance: '32px',
      reset: true
    })
  ScrollReveal().reveal(
    '.reveal-left',
    {
      delay: 500,
      origin: 'right',
      distance: '32px',
      reset: true
    })
  ScrollReveal().reveal(
    '.reveal-top',
    {
      delay: 500,
      distance: '32px',
      reset: true
    })
}

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
