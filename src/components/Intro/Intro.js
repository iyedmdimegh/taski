import logo from "../../assets/logo.jpeg"
import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"
import linkedin from "../../assets/linkedin.png"
import whatsapp from "../../assets/whatsapp.png"
import './Intro.css'
function Intro(){
    return(
        <div className="intro-box">
            <img  src={logo} className="logo" alt=""/>
            <div className="social-media">
                <a href="https://www.facebook.com/iyed.medimegh.56/"><img src={facebook} alt="" /></a>
                <a href="https://www.instagram.com/iyed.mdimegh/"><img src={instagram} alt=""/></a>
                <img src={whatsapp} alt=""/>
                <a href="https://www.linkedin.com/in/iyed-mdimegh-21b1b5285/"><img src={linkedin} alt=""/></a>
            </div>
        </div>
    )
}
export default Intro;