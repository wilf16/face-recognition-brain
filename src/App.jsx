import './App.css'
import Navigation from './components/Navigation/Navigation.jsx'
import Logo from './components/Logo/Logo.jsx'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.jsx'
import Rank from './components/Rank/Rank.jsx'
import FaceRecognition from './FaceRecognition.jsx'
import SignIn from './components/SignIn/SignIn.jsx'
import Register from './components/Register/Register.jsx'
import { useState, useEffect } from 'react'

function App() {
  const [route, setRoute] = useState('signin');
  const [isSignedIn, setIsSignedIn] = useState(false);

  const onRouteChange = (newRoute) => {
    if (newRoute == 'signout') {
      setIsSignedIn(false);
    } else if (newRoute == 'home') {
      setIsSignedIn(true);
    } else if (newRoute == 'signin') {
      setIsSignedIn(false);
    }
    setRoute(newRoute);
  }

  useEffect(() => {
    particlesJS.load('particles-js', './src/assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }, []);

  return (
    <div>
      <div id="particles-js" className='particles'></div>
      <Navigation onRouteChange={onRouteChange} isSignedIn={isSignedIn}/>
      { route === 'home' 
        
        ? <div>
            <Logo />
            <Rank />
            <ImageLinkForm />
            <FaceRecognition /> 
          </div>
        : <div>
            { route === 'signin' 
              ? <SignIn onRouteChange={onRouteChange} /> 
              : <Register onRouteChange={onRouteChange} />
            }
          </div>
      }
    </div>
  )
}

export default App
