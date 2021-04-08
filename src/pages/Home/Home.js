import './Home.scss';
import landingImage from '../../resources/assets/home.svg';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="home columns is-vcentered">
      <div className="column left-section">
        <h2 className="title is-2 brand">Appius.io</h2>
        <div className="home-description">
          <p className="center">A tool to help Product Owners prioritise their tasks <br />and follow the correct direction.</p>
          <div className="center">
            <Link to="/prioritytool"><button className="button is-info">Get started</button></Link>
          </div>
          <p className="bottom center">Agile is more a “direction,” <br />than an “end,” <br />a philosophy and mindset at broad level.</p>
          <p className="subline center">-Pearl Zhu, Digital Agility: The Rocky Road from Doing Agile to Being Agile.</p>
        </div>
      </div>
      <div className="column right-section">
        <img src={landingImage} alt="landing image" />
      </div>
    </div>
  )
}

export default Home;