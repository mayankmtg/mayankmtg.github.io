
import React from 'react';
import logo from '../assets/images/logo_white.png';

function Navigation() {
  return (
    <div id="sidebar" className="sidebar">
        <div className="menu-left-part">
            <div className="search-holder">
                <label>
                    <input type="search" className="search-field" placeholder="" value="" name="s" title="" disabled="true" />
                </label>
            </div>
            <div className="site-info-holder">
                <h1 className="site-title">HI, I AM MAYANK</h1>
                <p className="site-description">
                    I architect and build Software. <br />
                    I maintain this page personally
                </p>
            </div>
            <nav id="header-main-menu">
                <ul className="main-menu sm sm-clean">
                    <li><a href="index.html" className="current">Blog</a></li>
                    {/* <li><a href="about.html">About</a></li>
                    <li><a href="scroll.html">Scroll</a></li>
                    <li><a href="contact.html">Contact</a></li> */}
                </ul>
            </nav>
            <footer>
                <div className="footer-info">
                    I maintain this site personally. <br />
                    Reach out to me at mayankmohindra06@gmail.com
                </div>
            </footer>
        </div>
        <div className="menu-right-part">
            <div className="logo-holder">
                <a href="index.html">
                    <img src={logo} alt="MayankMohindra Logo" />
                </a>
            </div>
            <div className="toggle-holder">
                <div id="toggle">
                    <div className="menu-line"></div>
                </div>
            </div>
            <div className="social-holder">
                <div className="social-list">
                    <a href="https://www.linkedin.com/in/mayank-mohindra-03ab7110b/"><i className="fa fa-linkedin"></i></a>
                    <a href="https://github.com/mayankmtg"><i className="fa fa-github"></i></a>
                </div>
            </div>
            <div className="fixed scroll-top"><i className="fa fa-caret-square-o-up" aria-hidden="true"></i></div>
        </div>
        <div className="clear"></div>
    </div>

  );
}

export default Navigation;