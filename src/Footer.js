import React from "react";
import Nav from "./Nav";

function Footer() {
    return(
        <footer id="main-footer" className="footer">        
            <div className="redes">
            <a href="https://www.facebook.com.ar">facebook</a> 
            <a href="https://www.instagram.com.ar">instagram</a>
            <a href="https://www.twitter.com.ar">twitter</a>
            </div>
            <div>
                <Nav/>
            </div>
        </footer>
    )
}

export default Footer