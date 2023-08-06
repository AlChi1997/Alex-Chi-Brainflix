import {Link} from 'react-router-dom';
import logo from '../../assets/Images/BrainFlix-logo.svg';
import avatar from '../../assets/Images/Mohan-muruge.jpg';
import search from '../../assets/Images/search.svg';
import upload from '../../assets/Images/upload.svg';
import './Header.scss';

const Header = () =>{
    return (
        <header className="header">
          <div className="header__main">
            <Link to="/">
              <img className="header__logo" src={logo} alt="BrainFlix Logo" />
            </Link>
          </div>
          <div className="header__submain">
            <div className="header__searchbar">
                <img className="header__searchImage" src={search} alt="magnifyglass" />
                <p>Search</p>
            </div>
            <img className="header__avatar" src={avatar} alt="Moham Muruge" />
            <Link to="/upload">
              <div className="header__upload">
                  <img className="header__uploadImage" src={upload} alt="upload img" />
                  <p>UPLOAD</p>
              </div>
            </Link>
          </div>

        </header>
      )
}
    
export default Header;