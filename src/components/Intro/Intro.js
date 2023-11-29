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
                <img src={facebook} alt=""/>
                <img src={instagram} alt=""/>
                <img src={whatsapp} alt=""/>
                <img src={linkedin} alt=""/>
            </div>
        </div>
    )
}
export default Intro;