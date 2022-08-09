import React from "react";
import './Footer.css'
import Img1 from '../imgs/Git_Hub.png'
import Img2 from '../imgs/Linkedin.png'
import Img3 from '../imgs/Twitter.png'
import Img4 from '../imgs/Youtube.png'


const footer = () => <footer>
<br></br>
<p>
    Leonardo Nascimento, 2022.
</p>
<div id="contact">
    <a href="https://github.com/LeoNascimentoDev" title="My Github Page" >
        <img className="icon" src={Img1} alt="My github Page" />
    </a>
    <a href="https://www.linkedin.com/in/leonascimentodev/" title="My Linkedin Page" >
        <img className="icon" src={Img2} alt="My Linkedin Page" />
    </a>
    <a href="https://twitter.com/onossoleo" title="My Twitter Page" >
        <img className="icon" src={Img3} alt="My Twitter Page" />
    </a>
    <a href="https://www.youtube.com/" title="My Youtube Page - Soon" >
        <img className="icon" src={Img4} alt="My Youtube Page" />

    </a>
</div>
</footer>
export default footer