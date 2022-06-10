import Header from './component/Header';
import {ThemeProvider} from 'styled-components'
import {Container} from './component/styles/Container.styled'
import GlobalStyles from'./component/styles/Global'
import {Content} from './component/Content'
import Card from './component/Card'
import Footer from './component/Footer'



const themes = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },

  mobile: '768px',
}


function App() {
  return (
    <ThemeProvider theme={themes}>
      <>
        <GlobalStyles /> 
        <Header />
        <Container>
          {Content.map((item, index, array) => (<Card key={index} item={item}></Card>))}   
        </Container> 
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
