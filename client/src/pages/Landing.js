import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
       <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>Job <span>Tracking</span> Tool</h1>
          <p> A web-based job management tool to keep track of applications, interviews, and so on.</p>
          <Link to='/register' className='btn btn-hero'>
          Login/Register
        </Link>
        </div> 
        <img src={main} alt='job hunt' className='img main-img'></img>
      </div>
    </Wrapper>

  )
}

export default Landing