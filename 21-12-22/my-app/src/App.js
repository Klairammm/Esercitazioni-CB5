import logo from './logo.svg';
import './App.css';
import {Button} from "./components/button/Button";
import { Text } from './components/text/Text';

function App() {

  const h1 = 'white'
  const h3 = '#61dafb'

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text as="h1" style={{ color: h1 }} variant='title'>
          Hello World!
        </Text>
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
        <Text as="h3" style={{ color: h3}} variant='title-footer'>
          Made with ❤
        </Text>
      </header>
    </div>
  );
}

export default App;
