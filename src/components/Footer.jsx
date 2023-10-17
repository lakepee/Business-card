import Facebook_icon from '../assets/Facebook-Icon.png';
import Instagram_icon from '../assets/Instagram-Icon.png';
import Twitter_icon from '../assets/Twitter-Icon.png';
import Github_icon from '../assets/Github-Icon.png';
import '../App.css'


export default function Footer(){
    return(
    <div className='footer flex'>
        <a href="#"><img src={Instagram_icon} alt="instagram logo" /></a>
        <a href="#"><img src={Facebook_icon} alt="facebook logo" /></a>
        <a href="#"><img src={Twitter_icon} alt="twitter logo" /></a>
        <a href="#"><img src={Github_icon} alt="github logo`" /></a>
    </div>)
}