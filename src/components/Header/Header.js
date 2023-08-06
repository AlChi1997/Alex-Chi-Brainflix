import logo from '../../assets/Images/BrainFlix-logo.svg';
import avatar from '../../assets/Images/Mohan-muruge.jpg';
import search from '../../assets/Images/search.svg';
import upload from '../../assets/Images/upload.svg';

const Header = () =>{
    return (
        <header className="header">
          <div className="header__main">
            <img className="header__logo" src={logo} alt="BrainFlix Logo" />
          </div>
          <div className="header__submain">
            <div className="header__searchbar">
                <img className="header__searchImage" src={search} alt="magnifyglass" />
                <p>Search</p>
            </div>
            <img className="header__avatar" src={avatar} alt="Moham Muruge" />
            <div className="header__upload">
                <img className="header__uploadImage" src={upload} alt="upload img" />
                <p>UPLOAD</p>
            </div>
          </div>

        </header>
      )
}
    
export default Header;