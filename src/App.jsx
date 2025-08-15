import './App.css'
import Navigation from './components/Navigation/Navigation.jsx'
import Logo from './components/Logo/Logo.jsx'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.jsx'
import Rank from './components/Rank/Rank.jsx'
import SignIn from './components/SignIn/SignIn.jsx'
import Register from './components/Register/Register.jsx'
import FaceRecognition from './components/FaceRecognition/FaceRecognition.jsx'
import { useState, useEffect } from 'react'

function App() {
  const [route, setRoute] = useState('signin');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [box, setBox] = useState({});

  useEffect(() => {
    particlesJS.load('particles-js', './src/assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }, []);

  const onRouteChange = (newRoute) => {
    if (newRoute === 'signout') {
      setIsSignedIn(false);
    } else if (newRoute === 'home') {
      setIsSignedIn(true);
    } else if (newRoute === 'signin') {
      setIsSignedIn(false);
    }
    setRoute(newRoute);
  }

  const onInputChange = (event) => {
    setInput(event.target.value);
  }

  const onButtonSubmit = () => {
    setImageUrl(input);
    fetch('http://localhost:3000/image', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: '123',
        imageUrl: input
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data) {
        console.log(data);
        displayFaceBox(calculateFaceLocation(data))
      }
    })
    .catch(err => console.log(err));
  }

  function calculateFaceLocation(data) {
    const clarifaiFace = data.boundingBoxes[0];
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.leftCol * width,
      topRow: clarifaiFace.topRow * height,
      rightCol: width - (clarifaiFace.rightCol * width),
      bottomRow: height - (clarifaiFace.bottomRow * height)
    }
  }

  function displayFaceBox(box) {
    setBox(box);
  }

  return (
    <div>
      <div id="particles-js" className='particles'></div>
      <Navigation onRouteChange={onRouteChange} isSignedIn={isSignedIn}/>
      { route === 'home' 
        
        ? <div>
            <Logo />
            <Rank />
            <ImageLinkForm 
              onInputChange={onInputChange} 
              onButtonSubmit={onButtonSubmit} />
            <FaceRecognition box={box} imageUrl={imageUrl} />
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
