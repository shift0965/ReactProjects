import Header from './component/Header';
import {ThemeProvider} from 'styled-components'
import {Container} from './component/styles/Container.styled'
import GlobalStyles from'./component/styles/Global'

const themes = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
}


function App() {
  return (
    <ThemeProvider theme={themes}>
      <>
        <GlobalStyles /> 
        <Header />
          <Container>
            <h1>Hello world</h1>
          </Container> 
      </>
    </ThemeProvider>
  );
}

export default App;
