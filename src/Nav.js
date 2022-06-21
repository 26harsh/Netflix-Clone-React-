import './index.css';
import netflixName from './images/netflix-name.png';
import netflixLogo from './images/netflix logo.png';
function Nav(){
    return(
        <>
            <header className="main-header">
                <div className="header-logo">
                    {/* <h3>Netflix</h3> */}
                    <img src={netflixLogo} alt="logo" className='netflix-logo'></img>
                    <img src={netflixName} alt="Netflix" className='netflix-name-img'></img>
                </div>
                <nav className="main-nav">
                    <ul className='nav-list'>
                        <li>
                            <a href="" className='nav-link'>Home</a>
                        </li>
                        <li>
                            <a href="" className='nav-link'>Series</a>
                        </li>
                        <li>
                            <a href="" className='nav-link'>Contact Us</a>
                        </li>

                        <li>
                            <a href="" className='nav-link'>About Us</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
     );
 }

 export default Nav;