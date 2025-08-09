import './App.css'
import Navigation from './components/Navigation/Navigation.jsx'
import Logo from './components/Logo/Logo.jsx'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.jsx'
import Rank from './components/Rank/Rank.jsx'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    particlesJS.load('particles-js', './src/assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }, []);

  return (
    <div>
      <div id="particles-js" className='particles'></div>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      { /*<FaceRecognition />*/
      }
      
    </div>
  )
}

export default App
