import logo from './logo.svg';
import './App.css';
import {Button} from "./atoms/button/Button";
import { Text } from './atoms/text/Text';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Container } from './layout/Container';

function App() {

  const h1 = 'white'
  // const h3 = '#61dafb'

  return (
    <div className="App">
      <Header />
      <main>
        <Container>Hi User!</Container> 
        {/* div.container > contenuto */}
        <img src={logo} className="App-logo" alt="logo" />
        <Container withRow={0}>
          <Text as='h1'
                style={{ color: h1 }} 
                variant='title'
                >Hello world!</Text>
        </Container>
        {/* .container > .row > contenuto */}

        
        {/* {Button(propsButton1)} */}
        {/* <Button label={propsButton2.label} 
                title={propsButton2.title} /> */}
        <div className='App-btn'>
          <Button aria-label="Do not touch!" 
                variant='no_touch'
                onClick={() => alert('Ouch! Why you hurting meee AAAHHHH')}
                >Don't Touch</Button>
          <Button variant='primary' 
                aria-label="Click me to print in console"
                onClick={() => alert('Hello Users! Welcome to my first React App')}
                >Click Me</Button>
          <Button variant='game' 
                aria-label="Click me and play Pacman"
                onClick={() => console.log('Have Fun')}
                ><a href="https://pacman.live/play.html">Have Fun</a></Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;