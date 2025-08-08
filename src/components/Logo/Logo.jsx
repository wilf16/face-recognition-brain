import Tilt from 'react-parallax-tilt'
import './Logo.css'
const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className='Tilt br2 shadow-2' style={{ height: '150px', width: '150px' }}>
        <div className='Tilt-inner pa3 center' style={{ 
          // display: 'flex', 
           alignItems: 'center', 
          // justifyContent: 'center',
          fontSize: '80px',
          height: '100%'
        }}>🧠</div>
      </Tilt>
    </div>
  )
}

export default Logo;
