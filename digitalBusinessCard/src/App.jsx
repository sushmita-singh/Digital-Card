import './App.css'

function App() {

  return (
  <div className='main-component'>
    <div className='header'>
      <img className='profile-pic' src='../images/profile-photo.jpg' alt="profile-photo" />
    </div>
    <div className='profile'>
      <h1 className='name'>Sushmita</h1>
      <h3 className='designation'>Frontend Developer</h3>
      <h4 className='email'>sushmitas586@gmail.com</h4>
    </div>
    <div className='cta'>
      <button className='btn-light'><img className='logo-btn' src='../images/envelope-icon.png' />Email</button>
      <button className='btn-dark'><img className='logo-btn linkedIn' src='../images/linkedin-square-icon.png' />LinkedIn</button>
    </div>
    <div className='data'>
      <h2 className='subheading'>About</h2>
      <p className='desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, debitis!</p>
      <h2 className='subheading'>Interests</h2>
      <p className='desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, debitis!</p>
    </div>
    <div className='footer'>
      <img className='logo' src='../images/x-social-media-logo-icon.png'  alt='Twitter' />
      <img className='logo' src='../images/medium-round-icon.png' alt='Medium' />
      <img className='logo' src='./images/github-icon.png' alt='Github' />
    </div>
  </div>
  )
}

export default App
