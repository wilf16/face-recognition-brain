import './App.css'
import Navigation from './components/Navigation/Navigation.jsx'
import Logo from './components/Logo/Logo.jsx'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.jsx'
import Rank from './components/Rank/Rank.jsx'
import FaceRecognition from './FaceRecognition.jsx'

function App() {
  return (
    <div>
      <div id="particles-js" className='particles'></div>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {
        /* 
        
        <FaceRecognition />*/
      }
      
    </div>
  )
}

particlesJS.load('particles-js', './src/assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

export default App
