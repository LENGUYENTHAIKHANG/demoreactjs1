import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Lê Nguyễn Thái Khang</h1>
                <Typed
                className="typed-text"
                strings={["Web Design","Web Development","Facebook Ads SMM","Google Ads"]}
                typeSpeed={40}
                backSpeed={60}
                

                />
               
                <a className="k" href="https://www.facebook.com/profile.php?id=10001337397260">Contact Us</a>
              

            </div>
        </div>
    )
}

export default Header
