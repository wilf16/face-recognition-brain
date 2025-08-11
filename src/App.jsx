import './App.css'
import Navigation from './components/Navigation/Navigation.jsx'
import Logo from './components/Logo/Logo.jsx'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.jsx'
import Rank from './components/Rank/Rank.jsx'
import FaceRecognition from './components/FaceRecognition/FaceRecognition.jsx'
import { useEffect, useState } from 'react'
// import Clarifai from 'clarifai'

function App() {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [box, setBox] = useState({});

  useEffect(() => {
    particlesJS.load('particles-js', './src/assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }, []);

  // const app = new Clarifai.App({
  //   apiKey: '7a19cb31b2d448f48b6f9024e97b4ba4'
  // });
  function calculateFaceLocation(data) {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  function displayFaceBox(box) {
    setBox(box);
  }

  const onInputChange = (event) => {
    setInput(event.target.value);
  }

  const onButtonSubmit = () => {
    setImageUrl(input);
    displayFaceBox({
      leftCol: 131.729,
      topRow: 146.954,
      rightCol: 141.376,
      bottomRow: 123.161
    });
    // app.models.predict(Clarifai.FACE_DETECT_MODEL, input)
    // .then(response => calculateFaceLocation(response))
    // .then(box => displayFaceBox(box))
    // .catch(err => console.log(err));
  }



  return (
    <div>
      <div id="particles-js" className='particles'></div>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm 
      onInputChange={onInputChange} 
      onButtonSubmit={onButtonSubmit} />
      <FaceRecognition box={box} imageUrl={imageUrl} />
    </div>
  )
}

export default App
